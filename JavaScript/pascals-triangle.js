/**
 * Generates Pascal's Triangle up to a specified number of rows.
 * * Each element in the triangle is the sum of the two numbers directly above it 
 * from the previous row. The edges of the triangle are always 1.
 * * @param {number} numRows - The number of rows of Pascal's Triangle to generate.
 * @returns {number[][]} A 2D array where each inner array represents a row of the triangle.
 * * @example
 * // returns [[1], [1, 1], [1, 2, 1]]
 * rows(3);
 * * @example
 * // returns []
 * rows(0);
 */
export const rows = (numRows) => {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let pascalsTriangle = [];
    for (let row = 1; row <= numRows; row++) {
        let rowArray = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === (row - 1)) {
                rowArray.push(1);
            } else {
                rowArray.push((pascalsTriangle[row - 2][col - 1]
                    + pascalsTriangle[row - 2][col]));
            }
        }
        pascalsTriangle.push(rowArray);
    }
    return pascalsTriangle;
}