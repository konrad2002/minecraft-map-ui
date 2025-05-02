export interface Rank {
  id: number;
  teamUUID: string;
  name: string;
  description: string;
  securityLevel: number;
  deletable: boolean;
  defaultRank: boolean;
}
