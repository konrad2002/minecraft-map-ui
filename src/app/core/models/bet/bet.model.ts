import {BetPool} from "./bet-pool.model";
import {BetOption} from "./bet-option.model";

export interface Bet {
  id: number;
  playerUUID: string;
  pool: BetPool;
  amount: number;
  option: BetOption;
}
