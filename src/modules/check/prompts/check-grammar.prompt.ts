import { IssueType } from '@modules/issue/enums/issue-type.enum';

export const getCheckGrammarPrompt = () => `
  Get text from user, check for grammar issues 
  and respond with JSON in the following format
  {
    "summary": "string",
    "issues": [
      {
        "type": ${Object.values(IssueType).join('|')},
        "text": "string",
        "message": "string",
        "suggestion": "string",
        "startIndex": "number",
        "endIndex": "number"
      }
    ]
  }
`;
