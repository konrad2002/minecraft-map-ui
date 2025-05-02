import {BingoEvent} from "./bingo-event.model";
import {BingoCardPlacement} from "./bingo-card-placement.model";

export interface BingoBoard {
  id: number;
  owner: string;
  bingoEvent: BingoEvent;
  cards: BingoCardPlacement[];
}
