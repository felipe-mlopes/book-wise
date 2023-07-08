const exceptions = ["de", "da", "das", "do", "dos"];

export function capitalizeFirstLetters(str: string): string {
  const words = str.split(" ");
  const capitalizedWords = words.map(word => {
    if (exceptions.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return `${firstLetter}${restOfWord}`;
  });
  return capitalizedWords.join(" ");
}