// https://www.codewars.com/kata/589ace5eeef39faf49000061

const reverseParentheses = s => {
  let substring = s.substring(s.lastIndexOf('(') + 1, s.lastIndexOf(')'));
  s.replace(/\((.+)\)/g, substring);
}

reverseParentheses('a(bc)de'); // returns 'acbde'
reverseParentheses('a(bcdefghijkl(mno)p)q'); // returns 'apmnolkjihgfedcbq'
reverseParentheses('co(de(war)s)'); // returns 'coswared'
reverseParentheses('Code(Cha(lle)nge)'); // returns 'CodeegnlleahC'
