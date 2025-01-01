// https://www.codewars.com/kata/54a91a4883a7de5d7800009c
function incrementString (strng) {
  // match everything before the last number AND the last number
  const letters = strng.match(/^(.*?)(\d+)$/);
  // if letters is null, it's because there is no number, so just return the string with 1 added to it
  if (letters === null) return strng + '1';
  // the number you want to increment is the 3rd item returned from match()
  let incrementedNum = String(parseInt(letters[2]) + 1);

  // if there are leading zeroes, find the difference between the length in letters[2] and num,
  // remove that from the front of the leading zeroes, then add the incrementedNum as a string
  if (letters[2][0] === '0') {
    incrementedNum = letters[2].slice(0, letters[2].length - incrementedNum.length) + incrementedNum;
  }

  return letters[1] + incrementedNum;
}

incrementString("foobar000"); // returns "foobar001"
incrementString("foobar999"); // returns "foobar1000"
incrementString("foobar00999"); // returns "foobar01000"
incrementString("foo"); // returns "foo1"
incrementString("foobar001"); // returns "foobar002"
incrementString("foobar1"); // returns "foobar2"
incrementString("1"); // returns "2"
incrementString("009"); // returns "010"
incrementString("fo99obar99"); // returns "fo99obar100"
