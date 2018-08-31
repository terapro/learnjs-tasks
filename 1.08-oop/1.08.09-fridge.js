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
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log(fridgeFood); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log(fridge.getFood()); // внутри по-прежнему: котлета, сок, варенье
