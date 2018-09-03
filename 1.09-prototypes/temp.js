function showList() {
  console.log([].join.call(arguments, " - "));
}

showList("Вася", "Паша", "Маша"); // Вася - Паша - Маша
