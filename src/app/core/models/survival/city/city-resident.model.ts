import {User} from "../../user.model";

export interface CityResident {
  name: string;
  townName: string;
  townRanks: string;
  nationRanks: string;
  lastOnline: number;
  joinedTownAt: number;
  title: string;
  friends: string;
  uuid: string;
  user?: User;
}
