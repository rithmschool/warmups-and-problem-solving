// tabluation
function stairs(n) {
  if (n < 3) return n;
  let store = [1, 1];
  for (let i = 2; i <= n; i++) {
    let total = store[1] + store[0];
    store[0] = store[1];
    store[1] = total;
  }
  return store[1];
}

// memoization
function stairs(n, memo = []) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  if (memo[n] > 0) return memo[n];
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo);
  return memo[n];
}

// function minimumStepsToOne(n, memo={}) {
//   if (n === 1) return 0;
//   if (memo[n]) return memo[n]
//   memo[n] = 1 + Math.min(
//     minimumStepsToOne(n - 1, memo),
//     n % 2 === 0 ? minimumStepsToOne(n / 2, memo) : Infinity,
//     n % 3 === 0 ? minimumStepsToOne(n / 3, memo) : Infinity
//   )
//   return memo[n];
// }

// tabulation
function minimumStepsToOne(n) {
  let data = { 1: 0 };
  for (let k = 2; k <= n; k++) {
    data[k] = data[k - 1] + 1;
    if (k % 2 === 0) data[k] = Math.min(data[k], 1 + data[k / 2]);
    if (k % 3 === 0) data[k] = Math.min(data[k], 1 + data[k / 3]);
  }
  return data[n];
}
