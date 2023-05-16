function getSum (addend1, addend2) {
    return addend1 + addend2;
}


function getDifference(number1, number2) {
    return number1-number2;
} 

function getProduct(integer1, integer2) {
    return integer1 * integer2;
}

function getQuotient(dividend, divisor) {
    return dividend/divisor;
}

let num1;
let num2;
let operator;

function operate(num1, operator, num2) {
    if (operator === '+') {
        getSum(num1, num2);
    }
    else if (operator === '-') {
        getDifference(num1, num2);
    }
    else if (operator === '*') {
        getProduct(num1, num2);
    }
    else {
        getQuotient(num1, num2);
    }
}

