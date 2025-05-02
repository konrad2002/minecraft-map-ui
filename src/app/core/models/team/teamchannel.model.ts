import {Channeltype} from "./channelType.model";

export interface TeamChannel {
  archived: boolean;
  channelId: number;
  description: string;
  expiryDate: string;
  id: number;
  channelType: Channeltype;
  active: boolean;
  tier: string;
}

