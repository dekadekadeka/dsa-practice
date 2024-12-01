// https://www.codewars.com/kata/55cbd4ba903825f7970000f5
function getGrade (s1, s2, s3) {
  const gradesHash = { 90: 'A', 80: 'B', 70: 'C', 60: 'D' };
  const avg = (s1 + s2 + s3) / 3;
  const baseGrade = Math.floor(avg / 10) * 10;
  
  return gradesHash[baseGrade] ?? (baseGrade === 100 ? 'A' : 'F');
}

getGrade(100,100,100); // returns 'A'
getGrade(40, 50, 35); // returns 'F'
