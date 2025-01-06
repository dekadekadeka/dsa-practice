// https://www.codewars.com/kata/589ace5eeef39faf49000061

const reverseParentheses = s => {
  const arr = s.split('');

  while (arr.includes('(')) {
    // find the first ')' in the array - arr.indexOf(')'), then find the index of the matching '('
    const lastIndex = arr.slice(0, arr.indexOf(')')).lastIndexOf('(');
    const subArr = arr.slice(lastIndex + 1, arr.indexOf(')')).reverse().join('');
    arr.splice(lastIndex, subArr.length + 2, subArr);

    return reverseParentheses(arr.join(''));
  }

  return arr.join('');
}

reverseParentheses('JFeS(Gl(hR(Tf(IbCANRBZWW)DCZcb)tC)N(jmf(a(VDbA)JPBdXtro)(Ut(kwDi)EQcYDfw)a))');
reverseParentheses('a(bc)de'); // returns 'acbde'
reverseParentheses('a(bcdefghijkl(mno)p)q'); // returns 'apmnolkjihgfedcbq'
reverseParentheses('co(de(war)s)'); // returns 'coswared'
reverseParentheses('Code(Cha(lle)nge)'); // returns 'CodeegnlleahC'
