import {TranslationLabel} from "./translation-label.model";

export interface Translation {
  id: number,
  key: string,
  description?: string,
  labels: TranslationLabel[]
}
