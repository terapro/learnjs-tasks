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
  var parentDisable = this.disable;
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

  this.disable = function() {
    if (this._food.length) {
      throw new Error("ОШИБКА: в холодильнике есть еда");
    }
    parentDisable();
  };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
