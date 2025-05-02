import {Translation} from "./translation.model";

export interface TranslationListResponse {
  offset: number,
  limit: number,
  totalCount: number,
  items: Translation[]
}
