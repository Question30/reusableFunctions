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
