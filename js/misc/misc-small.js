// https://www.codewars.com/kata/562926c855ca9fdc4800005b
// Note: Math.pow and some other Math functions like eval() and ** are disabled.
function numberToPower(number, power){
  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
  }

  return result;
}

numberToPower(4, 2); // return 16
numberToPower(10, 4); // return 10000
numberToPower(10, 0); // return 1

// I just wanted to reverse an array without using reverse().
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const reverseArr = arr => {
  let lastIndex = arr.length - 1;

  for (let i = 0; i < (arr.length / 2); i++) {
    let temp = arr[i];
    let last = arr[lastIndex];

    arr[i] = last;
    arr[lastIndex] = temp;
    lastIndex--;
  }

  return arr;
}

reverseArr(arr);

// https://www.codewars.com/kata/57126304cdbf63c6770012bd
function isDigit(s) {
  if (1 / parseFloat(s) === -Infinity) return false;

  return !isNaN(Number(s));
  // return (1 / -Number(s.trim()) === -Infinity) ?? !isNaN(Number(s.trim()));
}

isDigit("3 4");
isDigit(" ");
isDigit("-0");
isDigit("s2324");
isDigit("-234.4");

// https://www.codewars.com/kata/5a87449ab1710171300000fd/
function tidyNumber(n){
  return String(n).split('').sort().join('') === String(n).split('').join(''); 
}

tidyNumber(12); // return true
tidyNumber(102); // return false
tidyNumber(9672); // return false
tidyNumber(2789); // return true
tidyNumber(2335); // return true

// https://www.codewars.com/kata/582e0e592029ea10530009ce
class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  while (goose > players.length) {
    goose -= players.length;
  }
  
  return players[goose - 1].name;
}

duckDuckGoose(players, 1); // return a
duckDuckGoose(players, 3); // return c
duckDuckGoose(players, 10); // return z
duckDuckGoose(players, 20); // return z
duckDuckGoose(players, 30); // return z
duckDuckGoose(players, 18); // return g
duckDuckGoose(players, 28); // return g
duckDuckGoose(players, 12); // return b
duckDuckGoose(players, 2); // return b
duckDuckGoose(players, 7); // return f

// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
function kebabize(str) {
  return str.replace(/\d/, '').replace(/(?<=[a-zA-Z])(?=[A-Z])/g, '-').toLowerCase();
}

kebabize('MyCamelCasedString7'); // return 'my-camel-cased-string'
kebabize('myCamelCasedString'); // return 'my-camel-cased-string'
kebabize('MyCamelHas3Humps'); // return 'my-camel-cased-string'
kebabize('CAMEL'); // return 'c-a-m-e-l'

// https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript
function isPythagoreanTriple(integers) {
  const sorted = integers.sort((a, b) => a - b);
  return Math.sqrt(sorted[0] * sorted[0] + sorted[1] * sorted[1]) === sorted[2];
}

isPythagoreanTriple([5, 12, 13]); // return true
isPythagoreanTriple([3, 4, 5]); // return true
isPythagoreanTriple([3, 5, 9]); // return false

// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript
function stairsIn20(s){
  let totalSteps = 0;

  // for (let day of s) {
    for (let steps of s.flat()) {
      totalSteps += steps;
    }
  // }

  return totalSteps * 20;
}

var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
          7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
          5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
          6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
          6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
          5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
          7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
           7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
           7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
           5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
             5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
             5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
             9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
            9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
            9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
            7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
         6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
         9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
         5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
            5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
            5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
            7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday];

stairsIn20(stairs); // return 54636040

// https://www.codewars.com/kata/57216d4bcdd71175d6000560/javascript
function padIt(str, n){
  const strArr = [str];

  while (n > 0) {
    if (n % 2 === 0) {
      strArr.push('*');
    } else {
      strArr.unshift('*');
    }
    n--;
  }

  return strArr.join('');
}

padIt("a", 1); // return '*a'
padIt("a", 2); // return '*a*'
padIt("a", 3); // return '**a*'
padIt("a", 4); // return '**a**'
padIt("a", 5); // return '***a**'

// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n)
{
  if (n < 0 || n > 12) throw new RangeError;

  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
}

// factorial(-1);
factorial(0);
factorial(1);
factorial(5);

// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
function upArray(arr){
  if (!arr.length) return null;
  if (arr.some(a => a < 0 || a > 9)) return null;

  return (BigInt(arr.join('')) + 1n).toString().padStart(arr.length, '0').split('').map(num => +num);
}

upArray([]); // return null
upArray([1, -9]); // return null
upArray([1, 10]); // return null
upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]); // return [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
upArray([4,3,2,5]); // return [4, 3, 2, 6]
upArray([9,9]) // return [1, 0, 0]
upArray([0, 7]); // return [0, 8]

// https://www.codewars.com/kata/580755730b5a77650500010c
function sortMyString(S) {
  let evenString = '';
  let oddString = '';

  for (let i = 0; i < S.length; i++) {
    i % 2 === 0 ? evenString += S[i] : oddString += S[i];
  }

  return `${evenString} ${oddString}`;
}

sortMyString("CodeWars"); // return "CdWr oeas"
sortMyString("YCOLUE'VREER"); //return "YOU'RE CLEVER"

// https://www.codewars.com/kata/586f6741c66d18c22800010a
const sequenceSum = (begin, end, step) => {
  if (end < begin) return 0;

  let result = 0;

  for (let i = begin; i <= end; i += step) {
    result += i;
  }

  return result;
};

sequenceSum(2, 6, 2); // return 12
sequenceSum(1, 5, 1); // return 15
sequenceSum(1, 5, 3); // return 5

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj){
  const result = [];

  for (const word in obj) {
    if (word.length === 5) {
      result.push(word);
    }

    if (obj[word].length === 5) {
      result.push(obj[word]);
    }
  }

  return result;
}

giveMeFive({Our:"earth",is:"a",beautyful:"world"}); // return ["earth","world"]
giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}); // return ["Ihave","money","model"]
giveMeFive({Pears:"than",apple:"sweet"}); // return ["Pears","apple","sweet"]

// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
function last(x){
  return x.split(' ').sort((a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    return 0;
  });
}

last('man i need a taxi up to ubud'); // return  ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'); // return  ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'); // return  ['take', 'me', 'semynak', 'to']

// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
function howMuchILoveYou(nbPetals) {
  const msgs = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  }

  while (nbPetals > 6) {
    nbPetals -= 6;
  }

  return msgs[nbPetals];
}

howMuchILoveYou(7); // return "I love you"
howMuchILoveYou(3); // return "a lot"
howMuchILoveYou(6); // return "not at all"
