import {Translation} from "./translation.model";

export interface TranslationListEvent {
  type: "delete" | "modify" | "add" | "refresh_requirements",
  translation: Translation
}
