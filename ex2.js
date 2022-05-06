/*2-Given an array of five values, calculate the average star rating, rounded
 to two decimal places. The array contains user votes per star, so the first 
 element [0]contains the number of 1-star ratings and the last element [4],
  the number of 5-star ratings.
Return the average score in [brackets], followed by a space and
 asterisks' * to represent the star rating, rounded to the nearest 
 whole star.
*/
const starRating = (Array) => {
  let sum = 0;
  let factor = 0;
  for (let i = 0; i < Array.length; i++) {
    sum += Array[i] * (i + 1);
    factor += Array[i];
  }
  let avg = (sum / factor).toFixed(2);
  if (avg >= 1 && avg < 1.5) {
    return [avg] + " *";
  } else if (avg >= 1.5 && avg <= 2.5) {
    return [avg] + " **";
  } else if (avg >= 2.5 && avg <= 3.5) {
    return [avg] + " ***";
  } else if (avg >= 3.5 && avg <= 4.5) {
    return [avg] + " ****";
  } else {
    return [avg] + " *****";
  }
};
console.log(starRating([55, 67, 98, 115, 61]));
