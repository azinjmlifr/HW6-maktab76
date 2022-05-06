/*4- Create a function to build a Clock in 12 hours(with AM & PM ) and show 
 The current Time in the console.
 */
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm;
  if (hours >= 12) {
    ampm = "Pm";
  } else {
    ampm = "Am";
  }
  hours = hours - 12;
  if (hours) {
    hours = hours;
  } else {
    hours = 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

console.log(formatAMPM(new Date()));
