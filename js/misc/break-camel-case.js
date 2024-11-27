// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  // more simplified: string.replace(/[A-Z]/g, ' $&')
  return string.replaceAll(/[a-z](?=[A-Z])/g, '$& ');
}

solution('bintangAndCitlali'); // return 'bintang And Citlali'
