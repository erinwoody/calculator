function Clear() {
  document.calculator.display.value = "";
}
function Divide() {
  document.calculator.display.value += "/";
}
function Multiply() {
  document.calculator.display.value += "*";
}
function Subtract() {
  document.calculator.display.value += "-";
}
function Add() {
  document.calculator.display.value += "+";
}
function Percent() {
  document.calculator.display.value += "%";
}
function OpenParen() {
  document.calculator.display.value += "(";
}
function CloseParen() {
  document.calculator.display.value += ")";
}
