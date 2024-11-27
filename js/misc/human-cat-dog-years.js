// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
var humanYearsCatYearsDogYears = function(humanYears) {
  let base = 15; // both dogs and cats live 15 dog/cat years their first human year
  let catYears = base, dogYears = base;

  if (humanYears >= 2) {
    base += 9; // both dogs and cats live 9 dog/cat years their second human year
    catYears = base + (humanYears - 2) * 4; // cats live 4 years per human year after 2 years
    dogYears = base + (humanYears - 2) * 5; // dogs live 5 years per human year after 2 years
  }

  return [humanYears, catYears, dogYears];
}

humanYearsCatYearsDogYears(2); // return [2, 24, 24]
