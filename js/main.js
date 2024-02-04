// CALCULATOR PROGRAM

// const display = document.getElementById('display');

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error"
//     }
// }


// calculator.js
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = new Function('return ' + display.value)();
  } catch (error) {
    display.value = "Error";
  }
}
