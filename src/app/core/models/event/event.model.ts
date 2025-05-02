export interface EventModel {
  id: number;
  name: string;
  shortName: string;
  description: string;
  eventType: EventType;
  tier: Tier;
  eventState: EventState;
  startDate: string;
  endDate: string;
  closingDate: string;
}

export enum EventState {
  CREATED = "CREATED",
  REGISTRATION = "REGISTRATION",
  POST_REGISTRATION = "POST_REGISTRATION",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export namespace EventState {
  export function getKey(state: EventState): string {
    return `global.event.state.${state.toLowerCase()}`;
  }
}

export enum EventType {
  FIGHT_NIGHT = "FIGHT_NIGHT",
  WARGEAR_LEAGUE = "WARGEAR_LEAGUE",
}


export namespace EventType {
  export function getKey(type: EventType): string {
    return `global.event.type.${type.toLowerCase()}`;
  }
}

export enum Tier {
  TIER_I = "TIER_I",
  TIER_II = "TIER_II",
  TIER_II_OLD_SCHOOL = "TIER_II_OLD_SCHOOL",
  TIER_III = "TIER_III",
  TIER_III_OHNE_SFA = "TIER_III_OHNE_SFA",
}

export namespace Tier {
  export function getKey(tier: Tier): string {
    return `global.event.tier.${tier.toLowerCase()}`;
  }
}
