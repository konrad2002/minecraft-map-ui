export interface TranslationStats {
  totalCount: number,
  matchingKeyFilter: number,
  missingAnyGivenLanguage: number,
  workInProgressCount: number,
  notTranslatedKeyCount: number,
  percentage: number,
  count: Record<string, number>
}
