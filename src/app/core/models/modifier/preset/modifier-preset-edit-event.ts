import {ModifierPreset} from "./modifier.preset";

export interface ModifierPresetEditEvent {
  type: "delete" | "modify" | "add" | "refresh",
  modifierPreset?: ModifierPreset
}
