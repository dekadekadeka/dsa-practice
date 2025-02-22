// https://www.codewars.com/kata/5a905291fd57772be0000039
// **to be completed, not all tests pass**
threesAndFives=n=> {
  console.log(~~((n - n / 5) / 3));
  console.log(Math.abs(~~(n/5)-~~(n/3)));
  console.log(~~(n/15));
  console.log('~~~~~~~~~~~~~~~');
  return [Math.floor(n - (n / 5)),~~(n/3)-~~(n/5),~~(n/15)];
}

threesAndFives(0); // return [0, 0, 0]
threesAndFives(4); // return [1, 0, 0]
threesAndFives(6); // return [1, 1, 0]
threesAndFives(87); // return [23, 12, 5]
threesAndFives(444); // return [118, 59, 29]
threesAndFives(28976293); // return [7727012, 3863506, 1931752]
threesAndFives(82967990); // return [22124797, 11062398, 5531199]
threesAndFives(682957990); // return [182122131, 91061065, 45530532]
