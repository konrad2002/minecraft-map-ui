import {MissilewarsCardType} from "./card-type.model";

export interface MissilewarsCard {
  id: number;
  name: string;
  colorCode: string;
  schematicName: string;
  cost: number;
  material: string;
  defCard: boolean;
  cardType: MissilewarsCardType;
}
