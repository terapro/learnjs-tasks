Function.prototype.defer = function(time) {
  var con = this;
  return function() {
    var arg = arguments;
    var cont2 = this;
    setTimeout(() => {
      con.apply(cont2, arg);
    }, time);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
