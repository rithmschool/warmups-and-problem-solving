// O(n log n) time and O(1) space with sorting + pointers
function swapPair(arr1, arr2) {
  const sumArray = arr => arr.reduce((acc, next) => acc + next);

  const getDiff = (arr1, arr2) => (sumArray(arr1) - sumArray(arr2)) / 2;

  let sortedArr1 = arr1.sort(),
    sortedArr2 = arr2.sort();
  let target = getDiff(sortedArr1, sortedArr2);

  if (target === 0) return false;

  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    let diff = arr1[i] - arr2[j];
    if (diff === target) return true;
    else if (diff < target) i++;
    else j++;
  }

  return false;
}

// // O(n) time and O(n) space with a set
// function swapPair(a1,a2){
//   const sumArray = arr => arr.reduce((acc,next) => acc+next);
//   let sumA1 = sumArray(a1) ,sumA2 = sumArray(a2)
//   let smaller = sumA1 < sumA2 ? a1 : a2;
//   let larger = sumA1 > sumA2 ? a1 : a2;
//   let storedSet = new Set(smaller);
//   let diff = (sumA2-sumA1) / 2
//   for(let i = 0; i < larger.length; i++){
//     if(storedSet.has(larger[i]-diff)) return true
//   }
//   return false;
// }

function romanToInteger(str) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    let number = romanMap[str[i]];
    let nextNumber = romanMap[str[i + 1]] || 0;
    result += number < nextNumber ? -number : number;
  }

  return result;
}
