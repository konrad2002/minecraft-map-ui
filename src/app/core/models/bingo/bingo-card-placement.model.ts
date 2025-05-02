import {BingoCard} from "./bingo-card.model";

export interface BingoCardPlacement {
  id: number;
  card: BingoCard;
  completed: boolean;
  x: number;
  y: number;
}
