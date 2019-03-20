//given an array of int, find if array contains any duplicates
//your fn should return true if any value appears at least twice in array, and should return false if every element

//example = [1,2,3,1]  ------ returns true

/* Pseudo Code
  -Create Nested Loop 
    1st Loop - take note of each element in list
    2nd Loop - compare current elem with each elem in arrray 
    If current element === another element, return true, if not return false 
    */

//METHOD ONE--------- O(n^2)
let myArray = [1, 2, 3, 3];

var method1 = function(myArray) {
  for (var i = 0; i <= myArray.length; i++) {
    for (var j = i; j <= myArray.length; j++) {
      if (i != j && myArray[i] == myArray[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(method1(myArray));


//METHOD TWO O(n)
  //Counts uses the actual value of the given index of myArray (loops through them) then compares
var method2 = function(myArray) {
  var counts = [];
  for (var i = 0; i <= myArray.length; i++) {
    if (counts[myArray[i]] === undefined) {
      counts[myArray[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(method2(myArray));
