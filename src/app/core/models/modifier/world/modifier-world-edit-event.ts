import {World} from "./world.model";

export interface ModifierWorldEditEvent {
  type: "delete" | "modify" | "add" | "refresh_requirements",
  world: World
}
