import {ArenaSize} from "./arena.size";

export interface ModifierArenaSizeEditEvent {
  type: "delete" | "modify" | "add" | "refresh",
  arenaSize: ArenaSize
}
