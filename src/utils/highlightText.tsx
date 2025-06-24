export const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark
        key={index}
        className="bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-400/30 dark:to-yellow-500/30 px-1.5 py-0.5 rounded-md font-medium shadow-sm"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
};
