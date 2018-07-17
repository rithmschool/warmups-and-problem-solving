// option 1
function pairCount(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      count++;
    }
  }
  return count;
}

// option 2
function pairCount(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += n - 1;
  }
  return count / 2;
}

// option 3
function pairCount(n) {
  return (n * (n - 1)) / 2;
}
