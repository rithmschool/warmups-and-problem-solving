// tabulation
function friendPairs(n) {
  const pairs = [];

  // optional short-circuit if the input is trivial
  if (n < 3) {
    return n;
  }

  // base cases
  pairs[0] = 0;
  pairs[1] = 1;
  pairs[2] = 2;

  // build (bottom-up)
  for (let i = 3; i <= n; i++) {
    pairs[i] = // current number combinations =
      pairs[i - 1] + // all the pairs from the last n
      (i - 1) * // plus the new person added to any existing pair (n - 1)
        pairs[i - 2]; // times all the pairs that person can fit in
    // note that it's i - 2 because it takes 2 for every pair.
  }
  return pairs[n];
}

// memoization
function friendPairsMemoization(n, memo = [0, 1, 2]) {
  if (memo.length <= n) {
    memo[n] =
      friendPairsMemoization(n - 1) + (n - 1) * friendPairsMemoization(n - 2);
  }
  return memo[n];
}
