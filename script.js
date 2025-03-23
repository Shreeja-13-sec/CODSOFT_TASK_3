const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    firstOperand = null;
    operator = "";
    display.value = "";
});

equalsButton.addEventListener("click", () => {
    if (currentInput !== "" && operator !== "" && firstOperand !== null) {
        const secondOperand = parseFloat(currentInput);
        
        let result;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = firstOperand / secondOperand;
                break;
        }
        
        display.value = result;
        currentInput = result.toString();
        operator = ""; 
        firstOperand = null; 
    } else {
        if (currentInput !== "") {
            firstOperand = parseFloat(currentInput);
        }
        currentInput = "";
    }
});

document.querySelectorAll('.operator:not(#equals)').forEach(opButton => {
    opButton.addEventListener("click", () => {
        if (currentInput !== "") {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else {
                equalsButton.click();
            }
            operator = opButton.dataset.value;
            currentInput = "";
        }
    });
});