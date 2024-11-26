export const getTextPositions = (sourceText: string, searchText: string) => {
  if (!sourceText || !searchText) return null;

  const startIndex = sourceText.indexOf(searchText) + 1;

  if (startIndex === 0) return null;

  const endIndex = startIndex + searchText.length;

  return { start: startIndex, end: endIndex };
};
