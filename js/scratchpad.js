class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  boop() {
    console.log(`${this.name}'s nose got booped!`);
  }
}

const citlali = new Cat('Citlali', 'Calico');
const bintang = new Cat('Bintang', 'Grey');
citlali.boop();
bintang.boop();
