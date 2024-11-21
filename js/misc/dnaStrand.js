// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
function dnaStrand(dna){
  let result = '';
  const hash = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };
  for (let i = 0; i < dna.length; i++) {
    result += hash[dna[i]];
  }
  
  return result;
}

dnaStrand('AAAA');

// https://www.codewars.com/kata/5556282156230d0e5e000089
function DNAtoRNA(dna) {
  if (dna.length === 0) return '';
  
  let result = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] !== 'T') {
      result += dna[i];
    } else {
      result += 'U';
    }
  }
  
  return result;
}
