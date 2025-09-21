// create a counter function that has increment and getValue functionality

const privateCounter = () => {
  let count = 0; // count is ONLY accessible from inside this function

  return {
    increment: (val = 1) => {
      count += val;
    },

    getValue: () => {
      return count;
    }
  }
};

const counter = privateCounter();
console.log(counter.getValue()); // this is the only way you can get the value inside of privateCounter
counter.increment();
console.log(counter.getValue());

const secretString = () => {
  const secret = 'I like trains!'

  return () => secret;
}

const getSecret = secretString();
console.log(getSecret());
