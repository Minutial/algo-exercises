// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let hour = parseInt(s.substring(0,2))
  let ampm = s.substring(8,10)
  let middlePart = s.substring(2,8)
  if (ampm === 'AM' && hour === 12){
    return '00' + middlePart;
  }
  if (ampm === 'PM' && hour < 12) {
    hour+= 12;
  }
  if (ampm === 'AM' && hour < 10){
    return '0' + hour + middlePart;
  }
  return hour + middlePart;
}

console.log(timeConversion('12:40:22AM'))
