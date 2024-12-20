// https://www.codewars.com/kata/5202ef17a402dd033c000009
function titleCase(title, minorWords = '') {
  if (title.length === 0) return '';
  // split both argument strings into a lowercase string array
  const splitTitle = title.toLowerCase().split(' ');
  const splitMinorWords = minorWords.toLowerCase().split(' ');

  for (let i = 0; i < splitTitle.length; i++) {
    // always capitalize the first letter of the first word
    // if the current word being checked is NOT in the minor words array...
    if (i === 0 || !splitMinorWords.includes(splitTitle[i])) {
      // then capitalize the first letter of the word
      splitTitle[i] = splitTitle[i].replace(splitTitle[i][0], splitTitle[i][0].toUpperCase());
    }
  }
  
  return splitTitle.join(' ');
}

titleCase(''); // returns ''
titleCase('a clash of KINGS', 'a an the of'); // returns 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In'); // returns 'The Wind in the Willows'
titleCase('the quick brown fox'); // returns 'The Quick Brown Fox'
