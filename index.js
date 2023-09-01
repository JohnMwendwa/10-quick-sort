/*
    -Define a function caled quickSort taht accepts an array
    -Call the pivot helper on the array
    -When the helper returns to you the updated pivot index recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
    -Your base case occurs when when you consider a subarray with less than 2 elements
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // let side
    quickSort(arr, left, pivotIndex - 1);

    // Right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

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

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
