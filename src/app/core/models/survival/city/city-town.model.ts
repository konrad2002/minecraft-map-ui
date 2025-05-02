import {CityResident} from "./city-resident.model";

export interface CityTown {
  name: string;
  major: string;
  nation: string;
  townBoard: string;
  tag: string;
  founder: string;
  protectionStatus: string;
  open: boolean;
  townPublic: boolean;
  allowedToWar: boolean;
  homeBlock: string;
  spawn: string;
  outlaws: string;
  registered: number;
  mapColorHexCode: string;
  trustedResidents: string;
  trustedTowns: string;
  allies: string;
  enemies: string;
  residents: CityResident[];
}
