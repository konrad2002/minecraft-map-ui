import {TeamUser} from "./teamuser.model";
import {Rank} from "./rank.model";
import {TeamChannel} from "./teamchannel.model";

export interface Team {
  uniqueID: string;
  name: string;
  description: string;
  shortName: string;
  active: boolean;
  open: boolean;
  members: TeamUser[];
  availableRanks: Rank[];
  teamChannel: TeamChannel;
  shortNameColor: string;
}
