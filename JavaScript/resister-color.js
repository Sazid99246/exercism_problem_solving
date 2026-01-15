export const colorCode = color => COLORS.indexOf(color);

/**
 * Returns the numeric resistor color code for a given color.
 *
 * @param {string} color - The color whose code should be looked up.
 * @returns {number} The numeric code corresponding to the color, or -1 if the color is not found.
 */
export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
