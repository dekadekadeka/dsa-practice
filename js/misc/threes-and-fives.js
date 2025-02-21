// https://www.codewars.com/kata/5a905291fd57772be0000039
// **to be completed, not all tests pass**
threesAndFives=n=> {
  console.log(Math.floor(Math.floor(n - (n / 5)) / 3)); // 29, but do not include numbers also divisible by 5 - remove 18 of these (69)
  console.log(Math.floor(Math.floor(n - (n / 3)) / 5)); // 17.4, but do not include numbers also divisible by 3 - remove 27 of these (60)
  console.log(Math.floor(Math.floor(n - ((n / 3) - (n / 5))) / 15)); // 5.8 - but remove 12 nums that are *both* divisible by 3 and 5 (75)
  return [Math.floor(n - (n / 5)),Math.floor(n - (n / 3)),Math.floor(n - ((n / 3) - (n / 5)))];
}

threesAndFives(0); // return [0, 0, 0]
threesAndFives(4); // return [1, 0, 0]
threesAndFives(6); // return [1, 1, 0]
threesAndFives(87); // return [23, 12, 5]
threesAndFives(444); // return [118, 59, 29]
threesAndFives(28976293); // return [7727012, 3863506, 1931752]
threesAndFives(82967990); // return [22124797, 11062398, 5531199]
threesAndFives(682957990); // return [182122131, 91061065, 45530532]
