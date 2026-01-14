/**
 * Returns a two-fer phrase using the provided name.
 *
 * If no name is given, it defaults to "you".
 *
 * @param {string} name - The name to include in the two-fer phrase.
 * @returns {string} A sentence in the form "One for <name>, one for me."
 */
export const twoFer = (name = 'you') => `One for ${name}, one for me.`;
