var animal = {
  jumps: null
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.jumps); // true (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // null (2)

delete animal.jumps;

console.log(rabbit.jumps); // undefined (3)
