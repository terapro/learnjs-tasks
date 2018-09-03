Function.prototype.defer = function(time) {
  setTimeout(this, time);
};

function f() {
  console.log("привет");
}

f.defer(3000); // выведет "привет" через 1 секунду
