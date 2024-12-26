// https://www.codewars.com/kata/58528e9e22555d8d33000163/
function minutesToMidnight(d){
  const remainingMinutes = 1440 - (d.getHours() * 60 + d.getMinutes() + (d.getSeconds() >= 30 ? 1 : 0));
  return `${remainingMinutes} minute${remainingMinutes === 1 ? '' : 's'}`;
}

const dateBeforeMidnight = new Date(new Date().setHours(23,59,0,0));
minutesToMidnight(dateBeforeMidnight); // return '1 minute'

const randomTest = new Date(new Date().setHours(7,39,33,0));
minutesToMidnight(randomTest); // return '980 minutes'

const fullDay = new Date(new Date().setHours(0,0,0,0));
minutesToMidnight(fullDay); // return '1440 minutes'
