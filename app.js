"use strict";

const buttons = document.querySelectorAll('.calculator input[type="button"]');

function handleClick() {
  const value = this.value;

  if (value === "AC") {
    clearDisplay();
  } else if (value === "DE") {
    deleteChar();
  } else if (value === "=") {
    calculateResult();
  } else {
    addCharToDisplay(value);
  }
}

function addClickHandlers(button) {
  button.addEventListener("click", handleClick);
}

buttons.forEach(addClickHandlers);

function clearDisplay() {
  document.querySelector("#display").value = "";
}

function deleteChar() {
  const display = document.querySelector("#display");
  const value = display.value;
  display.value = value.slice(0, -1);
}

function addCharToDisplay(char) {
  document.querySelector("#display").value += char;
}

function calculateResult() {
  const display = document.querySelector("#display");
  const result = eval(display.value);
  display.value = result;
}
