// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
	let result = [];

  for (let i = 0; i < s.length; i++) {
    result.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase());
  }

  return result.join('-');
}

accum("ZpglnRxqenU"); // return 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
