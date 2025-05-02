export interface EventTeam {
  name: string;
  shortName: string;
  wargearTeamUUID: string | null;
  members: EventTeamMember[];
}

export interface EventTeamMember {
  uuid: string;
  leader: boolean;
}
