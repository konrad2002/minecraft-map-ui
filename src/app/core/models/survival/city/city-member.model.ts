import {User} from "../../user.model";


export interface CityMember {
  id: number;
  uuid: string;
  user?: User
  rank: string;
}
