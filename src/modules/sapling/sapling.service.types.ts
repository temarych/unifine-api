export interface SentenceScore {
  score: number;
  sentence: string;
}

export interface AiDetectResponse {
  score: number;
  sentence_scores: SentenceScore[];
}
