//Given 2 Arrays that are sorted, merge into a single array that is sorted

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// // output [0,3,4,4,6,30,31]

//Create empty mergedArray
//compare Arr1 Arr2 indexes and if arr1 is less than arr 2 push it into the new array
//return merged array

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  //Check Input
  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (arr2Item === undefined || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}


console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]))