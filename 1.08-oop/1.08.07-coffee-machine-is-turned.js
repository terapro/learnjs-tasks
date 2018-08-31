function Machine() {
  this._enabled = false;
  this.enable = function() {
    this._enabled = true;
  };
  this.disable = function() {
    this._enabled = false;
    console.log(this);
  };
}

function CoffeeMachine(power) {
  Machine.call(this);
  this.run = function() {
    if (this._enabled) {
      console.log("Кофе готов!");
    } else {
      console.log("ошибка, кофеварка выключена!");
    }
  };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
