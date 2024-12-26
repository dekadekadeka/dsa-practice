// https://www.codewars.com/kata/54dc6f5a224c26032800005c
const stockList = (books, categories) => {
  if (books.length === 0) return '';

  const result = {};

  for (const cat of categories) {
    let bookArr = books.filter(b => b[0] === cat);

    if (bookArr.length > 0) {
      for (const b of bookArr) {
        let bookCount = b.split(' ')[1];
        result[cat] ? result[cat] += parseInt(bookCount)
        : result[cat] = parseInt(bookCount);
      }
    } else {
      result[cat] = 0;
    }
  }

  let resultArr = [];
  for (const k in result) {
    resultArr.push(`(${k} : ${result[k]})`);
  }

  return resultArr.join(' - ');
}

// return "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]);
