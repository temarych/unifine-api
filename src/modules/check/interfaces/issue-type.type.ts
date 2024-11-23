export const CheckIssueType = {
  Grammar: 'grammar',
  Vocabulary: 'vocabulary',
  Style: 'style',
  Tone: 'tone',
} as const;

export type CheckIssueType =
  (typeof CheckIssueType)[keyof typeof CheckIssueType];
