export const isPangram = (sentence) => {
  const uniqueLetters = new Set(
    sentence.toLowerCase().match(/[a-z]/g)
  );
  return uniqueLetters.size === 26;
};
