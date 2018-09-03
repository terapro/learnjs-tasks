/* options содержит настройки меню: width, height и т.п. */

var options = {
  width: 200,
  height: 150,
  style: "eco"
};

function Menu(options) {
  var optionsCustom = Object.create(options);
  optionsCustom.width = options.width || 300;
}
