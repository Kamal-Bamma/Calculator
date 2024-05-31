function addToDisplay(value) {
  document.querySelector("#display").value += value;
}

function clearDisplay() {
  document.querySelector("#display").value = "";
}

function calculate() {
  var expression = document.querySelector("#display").value;
  var result = eval(expression);
  document.querySelector("#display").value = result;
}
