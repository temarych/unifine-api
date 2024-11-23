export const getCheckGrammarPrompt = () => `
  Get text from user, check for grammar issues 
  and respond with JSON in the following format
  {
    "issues": [
      {
        "message": "string",
      }
    ]
  }
`;
