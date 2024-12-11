// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
const sequenceSum = count => {
  if (count <= 0) return `${count}${count === 0 ? '=' : '<' }0`
    
  const baseArr = [];
  let total = 0;
  
  for (let i = 0; i <= count; i++) {
    baseArr.push(i);
    total += i;
  }
  
  return `${baseArr.join('+')} = ${total}`;
}

sequenceSum(6); // returns '0+1+2+3+4+5+6 = 21'
