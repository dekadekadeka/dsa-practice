// https://www.codewars.com/kata/55b75fcf67e558d3750000a3
class Block {

  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (this.width * this.length) * 2 + (this.height * this.length) * 2 + (this.width * this.height) * 2;
  }
  
}

let block = new Block([2,4,6]);

block.getWidth(); // return 2
block.getLength(); // return 4
block.getHeight(); // return 6
block.getVolume(); // return 48
block.getSurfaceArea(); // return 88
