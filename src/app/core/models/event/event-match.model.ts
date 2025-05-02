import {EventTeam} from "./event-team.model";
import {EventGroup} from "./event-group.model";
import {EventKoMeta} from "./event-ko-meta.model";
import {EventFight, EventFightState} from "./event-fight.model";

export interface EventMatch {
  id: number;
  startDate: Date;
  round: MatchRound;
  team1?: EventTeam
  team2?: EventTeam;
  group: EventGroup | null;
  koMatchMeta: EventKoMeta | null;
  fights?: EventFight[];
  // TODO: bet pool
  betPoolId?: number;
}

export namespace EventMatch {
  export function getMatchState(match: EventMatch) {
    return match.fights?.map(f => f.state)
      .reduce((acc, state) => EventFightState.compare(acc, state) ? state : acc, EventFightState.CREATED) ?? EventFightState.CREATED;
  }
}

export enum MatchRound {
  GROUP = "GROUP",
  TIE_BREAKER = "TIE_BREAKER",
  ELIMINATION = "ELIMINATION",
  ROUND_OF_16 = "ROUND_OF_16",
  EIGHTH_FINALS = "EIGHTH_FINALS",
  QUARTER_FINAL = "QUARTER_FINAL",
  SEMI_FINAL = "SEMI_FINAL",
  THIRD_PLACE = "THIRD_PLACE",
  FINAL = "FINAL"
}

export namespace MatchRound {
  export function getByRemainingTeams(remaining: number): MatchRound | null {
    switch (remaining) {
      case 32:
        return MatchRound.ROUND_OF_16;
      case 16:
        return MatchRound.EIGHTH_FINALS;
      case 8:
        return MatchRound.QUARTER_FINAL;
      case 4:
        return MatchRound.SEMI_FINAL;
      case 2:
        return MatchRound.FINAL;
      default:
        return null;
    }
  }

  export function next(round: MatchRound): MatchRound | null {
    switch (round) {
      case MatchRound.ROUND_OF_16:
        return MatchRound.EIGHTH_FINALS;
      case MatchRound.EIGHTH_FINALS:
        return MatchRound.QUARTER_FINAL;
      case MatchRound.QUARTER_FINAL:
        return MatchRound.SEMI_FINAL;
      case MatchRound.SEMI_FINAL:
        return MatchRound.FINAL;
      default:
        return null;
    }
  }

  export function prev(round: MatchRound): MatchRound | null {
    switch (round) {
      case MatchRound.FINAL:
        return MatchRound.SEMI_FINAL;
      case MatchRound.SEMI_FINAL:
        return MatchRound.QUARTER_FINAL;
      case MatchRound.QUARTER_FINAL:
        return MatchRound.EIGHTH_FINALS;
      case MatchRound.EIGHTH_FINALS:
        return MatchRound.ROUND_OF_16;
      default:
        return null;
    }
  }

  export function getNumberOfFights(round: MatchRound): number {
    switch (round) {
      case MatchRound.SEMI_FINAL:
        return 2;
      case MatchRound.ROUND_OF_16:
        return 16;
      case MatchRound.EIGHTH_FINALS:
        return 8;
      case MatchRound.QUARTER_FINAL:
        return 4;
      case MatchRound.FINAL:
      case MatchRound.THIRD_PLACE:
        return 1;
      default:
        return -1;
    }
  }

  export function getKey(round: MatchRound): string {
    return round === MatchRound.ROUND_OF_16
      ? "mc.event.general.rounds.round_of_sixteen_message"
      : `mc.event.general.rounds.${round.toLowerCase()}_message`;
  }
}
