
function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(arr1, arr2) {
  let sortedArr = [];

  while (arr1 !== 0 && arr2 !== 0) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(findMinAndRemoveSorted(arr1))
    } else {
      sortedArr.push(findMinAndRemoveSorted(arr2))
    }
  }

  return sortedArr.concat(arr1).concat(arr2);
}
