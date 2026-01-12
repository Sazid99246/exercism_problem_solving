// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * @param {number} dx
 * @param {number} dy
 * @returns {(x: number, y: number) => [number, number]}
 */
export function translate2d(dx, dy) {
  return function translate(x, y) {
    return [x + dx, y + dy];
  };
}

/**
 * @param {number} sx
 * @param {number} sy
 * @returns {(x: number, y: number) => [number, number]}
 */
export function scale2d(sx, sy) {
  return function scale(x, y) {
    return [x * sx, y * sy];
  };
}

/**
 * @param {(x: number, y: number) => [number, number]} f
 * @param {(x: number, y: number) => [number, number]} g
 * @returns {(x: number, y: number) => [number, number]}
 */
export function composeTransform(f, g) {
  return function composed(x, y) {
    const [resX, resY] = f(x, y);
    return g(resX, resY);
  };
}

/**
 * @param {(x: number, y: number) => [number, number]} f
 * @returns {(x: number, y: number) => [number, number]}
 */
export function memoizeTransform(f) {
  /** @type {number | undefined} */
  let previousX;
  /** @type {number | undefined} */
  let previousY;
  /** @type {[number, number] | undefined} */
  let previousResult;

  return function memoized(x, y) {
    if (previousX === x && previousY === y && previousResult !== undefined) {
      return previousResult;
    }
    previousX = x;
    previousY = y;
    previousResult = f(x, y);
    return previousResult;
  };
}