// https://www.codewars.com/kata/66fc9ca2e6d1d0e9cc2e4a4c, not available in JS yet!
const countStreets = (streets, drivers) => {
  return drivers.map(crossStreets => Math.abs(streets.indexOf(crossStreets[0]) - streets.indexOf(crossStreets[1])) - 1);
}

countStreets(["first", "second", "third", "fourth", "fifth", "sixth", "seven"],
  [["first", "second"], ["second", "seven"], ["sixth", "fourth"]]); // return [0, 4, 1]

countStreets(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  [["j", "a"], ["b", "i"], ["c", "d"], ["e", "j"], ["i", "g"], ["a", "i"], ["f", "e"], ["a", "j"], ["e", "a"], ["e", "h"], ["h", "b"]]);
  // return [8,6,0,4,1,7,0,8,3,2,5]

// 2 streets, 1 driver
countStreets(["first", "second"],[["second", "first"]]); // return [0]

// 3 streets, 5 drivers (1 duplicate)
countStreets(["Drive", "DrivE", "carefully"],
  [["Drive", "DrivE"], ["Drive", "carefully"], ["DrivE", "Drive"], ["Drive", "DrivE"], ["carefully", "Drive"]]);
// return [0,1,0,0,1]
