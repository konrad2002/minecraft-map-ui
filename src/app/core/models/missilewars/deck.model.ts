import {MissilewarsCard} from "./card.model";

export interface MissilewarsDeck {
  id: number;
  number: number;
  name: string;
  active: boolean;
  cardSet: MissilewarsCard[]
}
