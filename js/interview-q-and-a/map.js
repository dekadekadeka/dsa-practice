// https://www.youtube.com/watch?v=wnYKH2dO620
const users = [
  {
    id: 1,
    name: 'Bintang',
    isActive: true,
    age: 7,
  },
  {
    id: 2,
    name: 'Citlali',
    isActive: true,
    age: 9,
  },
  {
    id: 3,
    name: 'Pinta',
    isActive: false,
    age: 17,
  },
];

// 1. get names of users
console.log(users.map(u => u.name));
// 2. get only names of active users
console.log(users.filter(u => u.isActive).map(u => u.name));
// 3. sort users by age descending
console.log(users.toSorted((a, b) => b.age - a.age).filter(u => u.isActive).map(u => u.name));
