function threePartSum(n) {
  let sums = [];

  // optional short-circuit if the input is trivial
  if (n < 5) {
    return n;
  }

  // base cases
  sums[0] = 0;
  sums[1] = 1;

  // build (bottom-up)
  for (let i = 2; i <= n; i++) {
    // note that i / 2, etc. will be undefined if it does not cleanly divide, thus we must floor it
    const half = sums[Math.floor(i / 2)];
    const third = sums[Math.floor(i / 3)];
    const quarter = sums[Math.floor(i / 4)];

    sums[i] = Math.max(half + third + quarter, i);
  }

  return sums[n];
}

function threePartSumMemo(n, memo = [0, 1]) {
  if (memo.length <= n) {
    memo[n] = Math.max(
      threePartSumMemo(Math.floor(n / 2)) +
        threePartSumMemo(Math.floor(n / 3)) +
        threePartSumMemo(Math.floor(n / 4)),
      n
    );
  }
  return memo[n];
}
