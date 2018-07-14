/** mostCarrots: find cell with most carrots in cells.
 *
 * params:
 * - cells: list of [row, col] cells
 * - garden: garden matrix
 * - ncols; number of columns
 * - nrows: number of rows
 *
 * returns: [row, col] of cell with most carrots
 */

function mostCarrots(cells, garden, ncols, nrows) {
  // Make list of [row, col] from cells
  // Throw out cells that are outside of garden grid

  const legal = cells.filter(
    ([row, col]) => 0 <= row && row < nrows && 0 <= col && col < ncols
  );

  let numCarrots = 0;
  let bestCell = null;

  for (let [row, col] of legal) {
    if (numCarrots < garden[row][col]) {
      numCarrots = garden[row][col];
      bestCell = [row, col];
    }
  }

  return bestCell;
}

/** lunchCount: return # of carrots eaten
 *
 * params:
 * - garden: matrix of carrot counts
 *
 * returns: # of carrots
 */

function lunchCount(garden) {
  // Sanity checks that garden is valid

  const row_lens = garden.map(r => r.length);
  console.assert(
    Math.min.apply(null, row_lens) === Math.max.apply(null, row_lens),
    "Garden is not a matrix!"
  );
  console.assert(
    garden.every(r => r.every(c => Number.isInteger(c))),
    "Garden values must be ints!"
  );

  // Get number of rows and columns

  const nrows = garden.length;
  const ncols = garden[0].length;

  // START SOLUTION

  let eaten = 0;

  // Find center cells. There can be at most four center cells,
  // if both ncols and nrows are odd. Since we're guaranteed that
  // there will never be tie of number of carrots in center cells,
  // we don't have to worry if a particular cell is duplicated, so
  // we can just test all possible center cells.

  let consider = [
    [Math.floor((nrows - 1) / 2), Math.floor((ncols - 1) / 2)],
    [Math.floor((nrows - 1) / 2), Math.floor((ncols - 0) / 2)],
    [Math.floor((nrows - 0) / 2), Math.floor((ncols - 1) / 2)],
    [Math.floor((nrows - 0) / 2), Math.floor((ncols - 0) / 2)]
  ];

  while (true) {
    // Find row, col coords of cell with most carrots
    const curr = mostCarrots(consider, garden, ncols, nrows);

    // If we can't find any carrots, take nap and return
    if (curr === null) return eaten;

    const [row, col] = curr;

    // Eat carrots in that cell and mark as eaten
    eaten += garden[row][col];
    garden[row][col] = 0;

    // Use the WNES neighbors as our next cells to consider.
    // The order here is important -- mostCarrots breaks ties
    // by using the first-of-ties, so ensure these are WNES

    consider = [[row, col - 1], [row - 1, col], [row, col + 1], [row + 1, col]];
  }
}
