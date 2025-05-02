export interface BetOption {
  id: number;
  text: string;
  correct: boolean;
}

export interface BetOptionCreationDto {
  text: string;
  correct: boolean;
  poolId: number;
}
