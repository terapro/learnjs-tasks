var head = {
  glasses: 1
};

var table = {
  pen: 3,
  __proto__: head
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

var pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // Undefined

console.log();
