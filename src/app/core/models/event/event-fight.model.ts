import {EventTeam} from "./event-team.model";
import {EventMatch} from "./event-match.model";

export interface EventFight {
  id: number;
  serverName: string;
  startDate: Date;
  state: EventFightState;
  winner?: EventTeam;
  match?: EventMatch;
  pointsTeam1: number;
  pointsTeam2: number;
}

export enum EventFightState {
  CREATED = "CREATED",
  STARTING = "STARTING",
  PREPARING = "PREPARING",
  RUNNING = "RUNNING",
  PENDING = "PENDING",
  OVER = "OVER"
}



export namespace EventFightState {
  export function compare(state1: EventFightState, state2: EventFightState): number {
    return value(state1) - value(state2);
  }

  export function value(state: EventFightState): number {
    switch (state) {
      case EventFightState.CREATED:
        return 1;
      case EventFightState.PREPARING:
        return 2;
      case EventFightState.RUNNING:
        return 3;
      case EventFightState.PENDING:
        return 4;
      case EventFightState.OVER:
        return 5;
      default:
        return 0;
    }
  }

  export function getKey(state: EventFightState): string {
    return `global.event.fight.state.${state.toLowerCase()}`;
  }

  export function getString(state: EventFightState): string {
    switch (state) {
      case EventFightState.CREATED:
        return "Erstellt";
      case EventFightState.STARTING:
        return "Startet"
      case EventFightState.PREPARING:
        return "Vorbereitung";
      case EventFightState.RUNNING:
        return "Läuft";
      case EventFightState.PENDING:
        return "Pending";
      case EventFightState.OVER:
        return "Beendet";
      default:
        return "-";
    }
  }
}
