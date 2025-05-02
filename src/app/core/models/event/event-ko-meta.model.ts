import {EventMatch} from "./event-match.model";
import {EventGroup} from "./event-group.model";

export interface EventKoMeta {
  id: number;
  matchBeforeTeam1: EventMatch;
  matchBeforeTeam2: EventMatch;
  groupBeforeTeam1: EventGroup;
  groupBeforeTeam2: EventGroup;
  koParticipantType1: KOParticipantType;
  koParticipantType2: KOParticipantType;
  bestOf: BestOf;
  bracket: BracketType;
}

export enum KOParticipantType {
  WINNER = "WINNER",
  LOOSER = "LOOSER",
  GROUP_FIRST = "GROUP_FIRST",
  GROUP_SECOND = "GROUP_SECOND",
  GROUP_THIRD = "GROUP_THIRD",
  GROUP_FOURTH = "GROUP_FOURTH",
  GROUP_FIFTH = "GROUP_FIFTH",
  GROUP_SIXTH = "GROUP_SIXTH",
}

export namespace KOParticipantType {
  export function getKey(type: KOParticipantType): string {
    return `web.dashboard.event.ko_participation.${type.toLowerCase()}`;
  }
}

export enum BracketType {
  LOOSER_BRACKET = "LOOSER_BRACKET",
  WINNER_BRACKET = "WINNER_BRACKET"
}

export namespace BracketType {
  export function getKey(bracket: BracketType): string {
    return `mc.event.general.bracket.${bracket.toLowerCase()}_message`;
  }
}

export enum BestOf {
  BEST_OF_ONE = "BEST_OF_ONE",
  BEST_OF_THREE = "BEST_OF_THREE",
  BEST_OF_FIVE = "BEST_OF_FIVE"
}

export namespace BestOf {

  export function getNumberOfWins(bestOf: BestOf): number {
    switch (bestOf) {
      case BestOf.BEST_OF_ONE:
        return 1;
      case BestOf.BEST_OF_THREE:
        return 2;
      case BestOf.BEST_OF_FIVE:
        return 3;
    }
  }

  export function getMaxFights(bestOf: BestOf): number {
    switch (bestOf) {
      case BestOf.BEST_OF_ONE:
        return 1;
      case BestOf.BEST_OF_THREE:
        return 3;
      case BestOf.BEST_OF_FIVE:
        return 5;
    }
  }

  export function getKey(bestOf: BestOf): string {
    return `mc.event.general.best_of.${bestOf.toLowerCase()}_message`;
  }
}
