class ClassicFinding {
  constructor(numToFind, arrLength) {
    if (arrLength <= 0) throw new Error('The array cannot be zero or negative length');
    if (numToFind < 0 || numToFind > arrLength) throw new Error('Number to find is out of range!');

    this.numToFind = numToFind;
    this.arr = [...Array(arrLength).keys()].map(i => i + 1);
  }

  // constant: go straight to the element based on its index(O(1))
  constant() {
    const start = performance.now();
    const num = this.arr[this.numToFind - 1];
    const end = performance.now();

    return `Found ${num}! Only took ${end - start} seconds. We only had to check the index.`;
  }
  
  // linear: go through each element in the array to find it (O(n))
  // the search is also constant/O(1) if the number you're looking for happens to be the first one in the array.
  linear() {
    const start = performance.now();
    for (let i = 1; i <= this.arr.length; i++) {
      if (this.numToFind === i) {
        const end = performance.now();
        return `Found! Only took ${i} iteration${i > 1 ? 's' : ''} in ${end - start} seconds`;
      }
    }
  }

  log(arr = this.arr, depth = 1, startTime = performance.now()) {
    let middle = Math.floor(arr.length / 2);

    if (arr[middle] === this.numToFind) {
      const end = performance.now();
      return `Found ${this.numToFind} at depth ${depth}, took ${end - startTime} seconds`
    }

    if (this.numToFind < arr[middle]) {
      return this.log(arr.slice(0, middle), depth + 1, startTime);
    } else {
      return this.log(arr.slice(middle + 1), depth + 1, startTime);
    }
  }
}

const findingArr = new ClassicFinding(4, 5);

console.log(findingArr.constant());
console.log(findingArr.linear());
console.log(findingArr.log());
