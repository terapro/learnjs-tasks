function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this);
  var capacity = power / 100;
  this._food = [];
  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("ОШИБКА: холодильник выключен!");
    }
    if (arguments.length + this._food.length > capacity) {
      throw new Error("ОШИБКА: слишком много еды!");
    }
    this._food = [...this._food, ...arguments];
  };
  this.getFood = function() {
    return [...this._food];
  };
  this.filterFood = function(func) {
    return this._food.filter(func);
  };
  this.removeFood = function(item) {
    var index = this._food.indexOf(item);
    if (index !== -1) {
      this._food.splice(index, 1);
    }
  };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log(fridge.getFood().length); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log(item.title); // сок, зелень
  fridge.removeFood(item);
});

console.log(fridge.getFood().length); // 2
