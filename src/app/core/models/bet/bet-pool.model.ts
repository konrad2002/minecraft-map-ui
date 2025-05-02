import {BetOption} from "./bet-option.model";


export enum BetPoolStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  DISTRIBUTED = "DISTRIBUTED",
}

export interface BetPool {
  id: number;
  name: string;
  status: BetPoolStatus;
  sum: number;
  bets: number;
  betsByBetOptions: BetsByBetOptions[]
}

export interface BetsByBetOptions {
  betOption: BetOption;
  sum: number;
  bets: number;
}
