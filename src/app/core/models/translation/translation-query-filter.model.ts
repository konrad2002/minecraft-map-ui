export class TranslationQueryFilter {
  key: string;
  limit: number;
  offset: number;
  missing_language: string[];
  filterLanguages: string[];


  constructor(key = '', limit = 30, offset = 0, missing_language: string[] = [], filterLanguages: string[] = []) {
    this.key = key;
    this.limit = limit;
    this.offset = offset;
    this.missing_language = missing_language;
    this.filterLanguages = filterLanguages
  }
}
