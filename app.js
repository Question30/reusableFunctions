//Part 1

//Take an array of numbers and return the sum
function sumOfArray(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });

  return sum;
}

//console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

//Take an array of numbers and return the average;
function avgOfArray(array) {
  return sumOfArray(array) / array.length;
}

// console.log(avgOfArray([1, 2, 3, 4, 5, 6]));

//Take an array and return the longest string

function longestString(array) {
  let longest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}
console.log(longestString(["say", "hello", "in", "the", "morning"]));

//Tkae an array of strings, and a number and return an array of the strings that aew longer than the number given
function stringsLongerThan(array, num) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

//Take a number n and print every number between 1 and n without using loops. use recursion
function recursivePrint(array) {
  if (array.length > 0) {
    console.log(array.shift());
    recursivePrint(array);
  }
}

recursivePrint(["say", "hello", "in", "the", "morning"]);

//Part 2
let arr = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//Sort the array by age
arr.sort((a, b) => a.age - b.age);

// console.log(arr);

//Filter the array to remove entries with an age greater than 50
const filteredArr = arr.filter((obj) => obj.age < 50);
// console.log(filteredArr);

//use the reduce method to calculate the sum of the ages, Then use the result to calculate the average age
const avgOfArr =
  arr.reduce((sum, value) => sum + parseInt(value.age), 0) / arr.length;
console.log(avgOfArr);

//Part 3
let myObj = {};
//Take an Object and increment its age field
function ageUp(obj) {
  if (Object.hasOwn(obj, "age")) {
    obj.age++;
  } else {
    obj.age = 0;
  }
  if (Object.hasOwn(obj, "updated_at")) {
    obj.updated_at = new Date();
  } else {
    obj.updated_at = new Date();
  }

  return obj;
}

console.log(ageUp(myObj));
console.log(ageUp(myObj));
