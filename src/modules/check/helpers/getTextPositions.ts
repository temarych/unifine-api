export const getTextPositions = (sourceText: string, searchText: string) => {
  if (!sourceText || !searchText) return null;

  const startIndex = sourceText.indexOf(searchText);

  if (startIndex === -1) return null;

  const endIndex = startIndex + searchText.length;

  return { start: startIndex + 1, end: endIndex };
};
