
function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(arr1, arr2) {
  let sortedArr = [];

  while (arr1 !== 0 && arr2 !== 0) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1[0])
    } else {
      sortedArr.psuh(arr2[0])
    }
  }

  return sortedArr.concat(arr1).concat(arr2);
}
