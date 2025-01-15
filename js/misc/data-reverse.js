// https://www.codewars.com/kata/569d488d61b812a0f7000015
const dataReverse = data => {
  let result = [];

  while (data.length > 0) {
    result = [...result, ...data.splice(-8)];
  }

  return result;
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
dataReverse(data1); // return [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1];
dataReverse(data3); // return [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
