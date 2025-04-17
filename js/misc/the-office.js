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
