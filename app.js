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

console.log(avgOfArray([1, 2, 3, 4, 5, 6]));
