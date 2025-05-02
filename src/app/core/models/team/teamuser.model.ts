import {Rank} from "./rank.model";
import {User} from "../user.model";

export interface TeamUser {
  uniqueId: string;
  teamUniqueId: string;
  user?: User;
  rank: Rank
}
