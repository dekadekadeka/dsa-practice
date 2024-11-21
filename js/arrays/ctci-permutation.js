// Cracking The Coding Interview - Arrays problem 1.2
// Again, do not make assumptions about which kind of string. Ask if ASCII or Unicode.
// Ask if spaces or special chars count.

// str1: String, str2: String
const checkPermutation = (str1, str2) => {
  // if the counts don't match, return false immediately
  if (str1.length !== str2.length) return false;

  // key/value pairs with each char in the string : how many times the char appears in the string
  const count1 = {};
  const count2 = {};

  for (let i = 0; i < str1.length; i++) {
    const val = str1.charAt(i);

    // if the key/value (letter: count) already exists...
    if (count1[val]) {
      // then increase the value/count by 1
      count1[val] += 1;
    } else {
      // else create that key/value pair and set it to 1
      count1[str1[i]] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const val = str2.charAt(j);

    if (count2[val]) {
      count2[val] += 1;
    } else {
      count2[str2[j]] = 1;
    }
  }

  for (let k = 0; k < Object.keys(count1).length; k++) {
    const val = str2.charAt(k);
    
    if (count1[val] !== count2[val]) {
      return false;
    }
  }

  return true;
}

console.log(checkPermutation('cobb me', 'mbco be')); // true
console.log(checkPermutation('bintang', 'citlali')); // false

// different, cleaner method using other solution from the book, might be better to use with JS
const sortedPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const str1Sorted = str1.split('').sort();
  const str2Sorted = str2.split('').sort();

  for (let i = 0; i < str1.length; i++) {
    if (str1Sorted[i] !== str2Sorted[i]) {
      return false;
    }
  }

  return true;
}

sortedPermutation('cobb me', 'mbco be');
sortedPermutation('bintang', 'citlali');
