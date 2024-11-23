import { CheckIssueType } from '../interfaces/issue-type.type';

export const getCheckGrammarPrompt = () => `
  Get text from user, check for grammar issues 
  and respond with JSON in the following format
  {
    "issues": [
      {
        "type": ${Object.values(CheckIssueType).join('|')},
        "text": "string",
        "message": "string",
        "suggestion": "string",
        "startIndex": "number",
        "endIndex": "number"
      }
    ]
  }
`;
