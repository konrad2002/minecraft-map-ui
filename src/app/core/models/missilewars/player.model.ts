import {MissilewarsDeck} from "./deck.model";

export interface MissilewarsPlayer {
  uuid: string;
  decks: MissilewarsDeck[]
}
