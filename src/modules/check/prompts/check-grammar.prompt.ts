import { IssueType } from '@modules/issue/enums/issue-type.enum';

export interface CheckGrammarPromptOptions {
  topic?: string;
  style?: string;
  excludedWords?: string;
}

export const getCheckGrammarPrompt = (options: CheckGrammarPromptOptions) => `
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

  requirements:
    ${options.topic ? `topic: ${options.topic}` : ''}
    ${options.style ? `style: ${options.style}` : ''}
    ${options.excludedWords ? `excludedWords: ${options.excludedWords}` : ''}
`;
