function CoffeeMachine(power) {
  "use strict";
  this.waterAmount = 0; // public property

  var WATER_HEAT_CAPACITY = 4.2;

  var self = this;
  var boilingTimeout;
  //Included functions Begin---------------

  function getBoilTime() {
    var time = (self.waterAmount * WATER_HEAT_CAPACITY * 80) / power;
    return time;
  }

  function onReady() {
    console.log("A coffee is ready");
  }

  //Included functions End ---------------

  this.run = function() {
    console.log("Swich on");
    boilingTimeout = setTimeout(onReady, getBoilTime());
  };

  this.stop = function() {
    console.log("Swich off");
    clearTimeout(boilingTimeout);
  };

  console.log(`A new coffee machine ${power} W is created! `);
}

var coffeeMachine = new CoffeeMachine(110);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop();
// As result it should do nothing
