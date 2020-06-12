function getFahrenheit(number) {
  return (number * 9) / 5 + 32;
}

function getCelsius(number) {
  return ((number - 32) * 5) / 9;
}

function inputTemperature(number) {
  return getFahrenheit();
  return getCelsius()
}

console.log(getFahrenheit(3));
console.log(getCelsius(3));
