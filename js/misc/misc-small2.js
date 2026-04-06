// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript
function vaporcode(string) {
  // original solution - did not account for strings that end in whitespace
  // return string.replace(/.(?=.)/g, l => /\W/.test(l) ? '' : l + '  ').toUpperCase();

  // after failing spec that checked for whitespace at the end
  return string.replace(/\S/g, l => /\W/.test(l) ? '' : l + '  ').toUpperCase().trimEnd();
}

vaporcode("Lets go to the movies"); // return "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

// just off the top of my head :)
function removeDuplicates(arr) {
  return arr.filter((n, i) => arr.lastIndexOf(n) === i);
}

removeDuplicates([6, 7, 67, 6, 9, 69, 4, 2, 0, 420]);
removeDuplicates([1, 1, 1, 2, 3, 2, 4]);

// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript
function getOrder(input) {
  const result = [];
  const menu = /milkshake|pizza|chicken|fries|coke|burger|sandwich|onionrings/g;

  // hardcoded menu is required due to items having to be in this order
  const menuHash = {
    burger: 0,
    fries: 0,
    chicken: 0,
    pizza: 0,
    sandwich: 0,
    onionrings: 0,
    milkshake: 0,
    coke: 0,
  };

  // count how many times each item from the menu appears in the input
  input.match(menu).forEach(item => menuHash[item]++);

  for (const item in menuHash) {  
    result.push(...Array(menuHash[item]).fill(item.charAt(0).toUpperCase() + item.slice(1)));
  }

  return result.join(' ');
}

// return "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza");
