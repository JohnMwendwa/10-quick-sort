/*
    -Write a function called pivot/partition that accepts 3 arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1,respectively)
    -Grab the pivot from the start of the array
    -Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    -Loop through the array from the start until the end
        *If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
    -Swap the starting element(i.e the pivot) with tha pivot index
    -Return the pivot index
*/

// my solution
function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivotIdx = 0;
  let curr = 1;

  while (curr < arr.length) {
    if (arr[startIdx] > arr[curr]) {
      pivotIdx++;
      [arr[pivotIdx], arr[curr]] = [arr[curr], arr[pivotIdx]];
    }
    curr++;
  }
  //   swap the first element with the pivot index
  [arr[startIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[startIdx]];

  return pivotIdx;
}

// Colt Steele solution
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
