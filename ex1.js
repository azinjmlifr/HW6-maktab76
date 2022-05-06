/*1-Create a function that takes in an array and returns 
an array of the accumulating sum.
*/
let arr = [5, 10, 3, 2];
let new_arr = [];
arr.reduce((prev, curr, i) => (new_arr[i] = prev + curr), 0);
console.log(new_arr);
