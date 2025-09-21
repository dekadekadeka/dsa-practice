// check if a user with a certain name exists in an array of objects
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

const checkUserInArr = (arr, user) => {
  return arr.some(u => u.name === user); // '.some()' returns boolean, '.find()' returns the actual object
}

console.log(checkUserInArr(users, 'Bintang'));
