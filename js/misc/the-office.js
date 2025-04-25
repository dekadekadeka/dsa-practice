// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
function outed(meet, boss){
  let result = 0;
  for (const name in meet) {
    if (name === boss) {
      result += (meet[name] * 2)
    } else {
      result += meet[name];
    }
  }

  return result / Object.keys(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'); // return 'Get Out Now!'
outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'); // return 'Nice Work Champ!'
outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'); // return 'Get Out Now!'

// https://www.codewars.com/kata/57ed4cef7b45ef8774000014
function boredom(staff){
  const boredomScores = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25,
  };
  // how bored are you ??
  const totalScore = Object.values(staff).reduce((a, c) => a + boredomScores[c], 0);

  return totalScore >= 100 ? 'party time!!' : totalScore > 80 ? 'i can handle this' : 'kill me now';
}

boredom({
  tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance'
}); // return 'kill me now'

boredom({
  tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen'
}); // return 'i can handle this'

boredom({
  tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about'
}); // return 'party time!!'

// https://www.codewars.com/kata/57ed56657b45ef922300002b
function broken(x){
  return x.split('').map(d => d ^ 1).join('');
}

broken("1"); // return "0"
broken("10000000101101111110011001000"); // return "01111111010010000001100110111"
broken("100010"); // return "011101"

// https://www.codewars.com/kata/57f604a21bd4fe771b00009c
function meeting(x){
  const index = x.findIndex(b => b === 'O');

  return index >= 0 ? index : 'None available!';
}

meeting(['X', 'O', 'X']); // return 1
meeting(['O','X','X','X','X']); // return 0
meeting(['X','X','X','X','X']); // return 'None available!'

// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b
function findAChair(x, need){
  if (need === 0) return 'Game On';
  const result = [];
  let count = 0;

  for (const room of x) {
    let diff = Math.max(room[1] - room[0].length, 0);

    if ((need - count) < diff) {
      diff = need - count;
    } else if (diff > need) {
      diff = diff - (diff - need);
    }

    count += diff;
    result.push(diff);

    if (count >= need) return result;
  }

  return 'Not enough!';
}

findAChair([
  [ 'XXX', 4 ],
  [ 'XXX', 3 ],
  [ 'XXXX', 6 ],
  [ 'XXX', 7 ],
  [ 'XXXXX', 1 ]
], 4); // return [ 1, +0, 2, 1 ]
findAChair([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4); // return [0, 1, 3]
findAChair([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5); // return [0, 0, 1, 2, 2]
findAChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0); // return 'Game On'
