//Anytime you get a question involving a string convert it to an array with split()

//################## REVERSE A STRING ################################
//'Hi my name is Ryan' --> 'nayR si eman ym iH'

//Input validation
//if (!str || str.length <2 || typeof str !== 'string) {return 'invalid}

//Split string into an array
//.reverse() method on the array
//.join('') to get it back to a string

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverse("Hi my name is Ryan"));

//Arrow function with spread operator

const reverse2 = str => [...str].reverse().join("");

(reverse2("Hi my name is Ryan"));
