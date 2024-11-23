import { CheckIssueType } from './issue-type.type';

export interface CheckIssue {
  type: CheckIssueType;
  text: string;
  message: string;
  suggestion: string;
  startIndex: number;
  endIndex: number;
}
