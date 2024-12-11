class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  boop() {
    console.log(`${this.name}'s nose got booped!`);
  }
}

class Dog extends Cat {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const bintang = new Cat('Bintang', 'Grey');
const citlali = new Cat('Citlali', 'Calico');
const perry = new Dog('Perry', 'Chihuahua');

bintang.boop();
citlali.boop();
perry.boop();
