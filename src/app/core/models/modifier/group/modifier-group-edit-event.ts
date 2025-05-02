import {ModifierGroup} from "./modifier.group";

export interface ModifierGroupEditEvent {
  type: "delete" | "modify" | "add" | "refresh",
  modifierGroup: ModifierGroup
}
