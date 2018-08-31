function Machine() {
  this._enabled = false;
  this.enable = function() {
    this._enabled = true;
  };
  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.call(this);
  var workingInterval = null;
  this.run = function() {
    if (this._enabled) {
      workingInterval = setTimeout(() => {
        workingInterval = null;
        console.log("Кофе готов!");
      }, 1000);
    } else {
      console.log("ошибка, кофеварка выключена!");
    }
  };
  this.parentDisable = this.disable;
  this.disable = function() {
    this.parentDisable();
    if (workingInterval) {
      clearTimeout(workingInterval);
    }
  };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
