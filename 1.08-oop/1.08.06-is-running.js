function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var isRunningStatus = false;

  var WATER_HEAT_CAPACITY = 4200;

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
    console.log("Кофе готов!");
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {
    isRunningStatus = true;
    setTimeout(function() {
      isRunningStatus = false;
      onReady();
    }, getTimeToBoil());
  };
  this.isRunning = function() {
    return isRunningStatus;
  };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log("До: " + coffeeMachine.isRunning()); // До: false

coffeeMachine.run();
console.log("В процессе: " + coffeeMachine.isRunning()); // В процессе: true

coffeeMachine.setOnReady(function() {
  console.log("После: " + coffeeMachine.isRunning()); // После: false
});
