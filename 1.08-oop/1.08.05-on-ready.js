function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var onReadyFunction = () => {
    console.log("Кофе готов!");
  };

  function getTimeToBoil() {
    return (waterAmount * WATER_HEAT_CAPACITY * 80) / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    onReadyFunction();
  }
  this.setOnReady = function(func) {
    onReadyFunction = func;
  };

  this.run = function() {
    setTimeout(() => onReady(), getTimeToBoil());
  };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  console.log("Готов кофе: " + amount + "мл"); // Кофе готов: 150 мл
});

coffeeMachine.run();
