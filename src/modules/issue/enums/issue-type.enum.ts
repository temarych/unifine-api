export const IssueType = {
  Grammar: 'grammar',
  Vocabulary: 'vocabulary',
  Style: 'style',
  Tone: 'tone',
} as const;

export type IssueType = (typeof IssueType)[keyof typeof IssueType];
