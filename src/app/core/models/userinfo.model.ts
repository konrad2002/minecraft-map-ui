export interface UserInfo {
  firstJoin: string;
  lastJoin: string;
  joins: number;
  onlineTime: number;
  onlineTimeString: string;
  nicked: boolean;
  banned: boolean;
  muted: boolean;
  banReason: string;
  muteReason: string;
  nameHistory: string[];
}
