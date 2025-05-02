import {EventTeam} from "./event-team.model";

export interface EventFight {
  id: number;
  startDate: Date;
  state: EventFightState;
  winner?: EventTeam;
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
}
