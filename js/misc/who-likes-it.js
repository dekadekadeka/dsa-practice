// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(names) {
  if (names.length <= 1) return `${names.length === 0 ? 'no one' : names[0]} likes this`;

  return names.slice(0, names.length <= 2 ? 1 : 2)
  .join(', ') + ` and ${names.length < 4 ? names[names.length - 1] : (names.length - 2) + ' others'} like this`
}

likes([]);
likes(['Bintang', 'Citlali']);
likes(['Bintang', 'Citlali', 'Pinta']);
likes(['Bintang', 'Citlali', 'Perry', 'Penny']);
