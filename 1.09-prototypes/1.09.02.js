var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat(); // Eat property is written into the rabbit
console.log(rabbit.full); // Should be true
