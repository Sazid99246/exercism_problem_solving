// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const array1Num = parseInt(array1.join(''));
    const array2Num = parseInt(array2.join(''));
    return array1Num + array2Num;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const n1 = (value).toString();
    const n2 = n1.split('').reverse().join('');
    return n1 === n2;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if (!input) {
        return 'Required field'
    }
    return Number(input) ? '' : 'Must be a number besides 0'
}
