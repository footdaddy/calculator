let num1;
let num2;
let operator;
let answer;

result = document.getElementById('result');
let clear = document.getElementById('clear');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let equals = document.getElementById('equals');

clear.addEventListener("click", () => {
    result.innerHTML = "";
    num1 = "";
    num2 = "";
    operator = "";
})

one.addEventListener("click", () => {
    result.innerHTML += "1";
})

two.addEventListener("click", () => {
    result.innerHTML += "2";
})

three.addEventListener("click", () => {
    result.innerHTML += "3";
})

four.addEventListener("click", () => {
    result.innerHTML += "4";
})

five.addEventListener("click", () => {
    result.innerHTML += "5";
})

six.addEventListener("click", () => {
    result.innerHTML += "6";
})

seven.addEventListener("click", () => {
    result.innerHTML += "7";
})

eight.addEventListener("click", () => {
    result.innerHTML += "8";
})

nine.addEventListener("click", () => {
    result.innerHTML += "9";
})

zero.addEventListener("click", () => {
    result.innerHTML += "0";
})

divide.addEventListener("click", () => {
    display = result.innerHTML.toString();
    if ((display.includes('+')) || (display.includes('-')) || (display.includes('*')) || (display.includes('/'))) {
        if (operator === "+") {
            let num2 = display.slice(display.indexOf("+ " + 1), );
            if (num2 != "") {
                console.log(num1);
                console.log(num2);
                num1 = (+num1)+(+num2);
                num1 = +num1.toFixed(3);
                operator="/"
          result.innerHTML=(+num1) + " / ";
         }
             else {
            result.innerHTML="ERROR";
         }
    }
        else if (operator === "-") {
            console.log(display);
           let num2 = display.slice(display.indexOf("- " + 1), )
            console.log(num1);
            console.log(num2);
             if (num2 !== "") {
                num1=(+num1)-(+num2);
                operator = "/";
            result.innerHTML=(+num1) + " / ";
             }
             else {
               result.innerHTML="ERROR"
             }
            }
        else if (operator === "*") {
            let num2 = display.slice(display.indexOf(" * " + 4), )
            if (num2 != "") {
                num1=(+num1)*(+num2);
                operator = "/"
                result.innerHTML = (+num1) + " / ";
            }
            else {
                result.innerHTML="ERROR"
            }
        }
        else if (operator === "/") {
            let num2 = display.slice(display.indexOf(" / " + 5), )
            if ((+num2) > 0) {
                num1=((+num1)/(+num2));
                operator = "/"
                result.innerHTML = (+num1) + " / ";
            }
            else if (((+num1) === 0) && ((+num2) === 0)) {
                result.innerHTML = "0 / ";
            }
            else if ((num2) === 0){
                result.innerHTML = "undefined";
            } 
            else {
                result.innerHTML = "ERROR";
            }
        }
    }
    else {
    num1 = result.innerHTML;
    operator = "/";
    result.innerHTML = num1 + " / ";}
})

add.addEventListener("click", () => {
    display = result.innerHTML.toString();
    if ((display.includes('+')) || (display.includes('-')) || (display.includes('*')) || (display.includes('/'))) {
        if (operator === "+") {
            let num2 = display.slice(display.indexOf("+ " + 1), );
            if (num2 != "") {
                console.log(num1);
                console.log(num2);
                num1 = (+num1)+(+num2);
          result.innerHTML=(+num1) + " + ";
         }
             else {
            result.innerHTML="ERROR";
         }
    }
        else if (operator === "-") {
            let num2 = display.slice(display.indexOf("- " + 5), )
            console.log(num1);
            console.log(num2);
             if (num2 !== "") {
                num1=(+num1)-(+num2);
                operator = "+";
            result.innerHTML=(+num1) + " + ";
             }
             else {
               result.innerHTML="ERROR"
             }
            }
        else if (operator === "*") {
            let num2 = display.slice(display.indexOf(" * " + 4), )
            if (num2 != "") {
                num1=(+num1)*(+num2);
                operator = "+"
                result.innerHTML = (+num1) + " + ";
            }
            else {
                result.innerHTML="ERROR"
            }
        }
        else if (operator === "/") {
            let num2 = display.slice(display.indexOf(" / " + 5), )
            if ((+num2) > 0) {
                num1=((+num1)/(+num2));
                operator = "+"
                result.innerHTML = (+num1) + " + ";
            }
            else if (((+num1) === 0) && ((+num2) === 0)) {
                result.innerHTML = "0 + ";
            }
            else if ((num2) === 0){
                result.innerHTML = "undefined";
            } 
            else {
                result.innerHTML = "ERROR";
            }
        }
    }
    else {
    num1 = result.innerHTML;
    operator = "+";
    result.innerHTML = num1 + " + ";}
})

multiply.addEventListener("click", () => {display = result.innerHTML.toString();
    if ((display.includes('+')) || (display.includes('-')) || (display.includes('*')) || (display.includes('/'))) {
        if (operator === "+") {
            let num2 = display.slice(display.indexOf("+ " + 1), );
            if (num2 != "") {
                console.log(num1);
            console.log(num2);
                num1 = (+num1)+(+num2);
                operator="*"
          result.innerHTML=(+num1) + " * ";
         }
             else {
            result.innerHTML="ERROR";
         }
    }
        else if (operator === "-") {
            console.log(display);
            let num2 = display.slice(display.indexOf("- " + 1), )
            console.log(num1);
            console.log(num2);
             if (num2 !== "") {
                num1=(+num1)-(+num2);
                operator = "*";
            result.innerHTML=(+num1) + " * ";
             }
             else {
               result.innerHTML="ERROR"
             }
            }
        else if (operator === "*") {
            let num2 = display.slice(display.indexOf(" * " + 4), )
            if (num2 != "") {
                num1=(+num1)*(+num2);
                operator = "*"
                result.innerHTML = (+num1) + " * ";
            }
            else {
                result.innerHTML="ERROR"
            }
        }
        else if (operator === "/") {
            let num2 = display.slice(display.indexOf(" / " + 5), )
            if ((+num2) > 0) {
                num1=((+num1)/(+num2));
                operator = "*"
                result.innerHTML = (+num1) + " * ";
            }
            else if (((+num1) === 0) && ((+num2) === 0)) {
                result.innerHTML = "0 * ";
            }
            else if ((num2) === 0){
                result.innerHTML = "undefined";
            } 
            else {
                result.innerHTML = "ERROR";
            }
        }
    }
    else {
    num1 = result.innerHTML;
    operator = "*";
    result.innerHTML = num1 + " * ";}
})

subtract.addEventListener("click", () => { display = result.innerHTML.toString();
    if ((display.includes('+')) || (display.includes('-')) || (display.includes('*')) || (display.includes('/'))) {
        if (operator === "+") {
            let num2 = display.slice(display.indexOf(" + " + 4), );
            if (num2 >= 0) {
                console.log(num1);
            console.log(num2);
                num1 = (+num1)+(+num2);
                operator = "-";
          result.innerHTML=(+num1) + " - ";
         }
             else {
            result.innerHTML="ERROR";
         }
    }
        else if (operator === "-") {
            let num2 = display.slice(display.indexOf(" - " + 4), )
             if (num2 >= 0) {
                num1=(+num1)-(+num2);
            result.innerHTML=(+num1) + " - ";
             }
             else {
               result.innerHTML="ERROR"
             }
            }
        else if (operator === "*") {
            let num2 = display.slice(display.indexOf(" * " + 4), )
            if (num2 >= 0) {
                num1=(+num1)*(+num2);
                operator = "-"
                result.innerHTML = (+num1) + " - ";
            }
            else {
                result.innerHTML="ERROR"
            }
        }
        else if (operator === "/") {
            let num2 = display.slice(display.indexOf(" / " + 5), )
            if ((+num2) > 0) {
                num1=((+num1)/(+num2));
                operator = "-"
                result.innerHTML = (+num1) + " - ";
            }
            else if (((+num1) === 0) && ((+num2) === 0)) {
                result.innerHTML = "0 - ";
            }
            else if ((num2) === 0){
                result.innerHTML = "undefined";
            } 
            else {
                result.innerHTML = "ERROR";
            }
        }
    }
    else {
    num1 = result.innerHTML;
    operator = "-";
    result.innerHTML = num1 + " - ";}
})

equals.addEventListener("click", () => {
    display = result.innerHTML.toString();
    if ((display.includes('+')) || (display.includes('-')) || (display.includes('*')) || (display.includes('/'))) {
        if (operator === "+") {
            let num2 = display.slice(display.indexOf("+ " + 1), );
            if (num2 !== "") {
                console.log(num1);
                console.log(num2);
          answer=((+num1)+(+num2));
          result.innerHTML = +answer.toFixed(3);
         }
             else {
            result.innerHTML="ERROR";
         }
    }
        else if (operator === "-") {
            let num2 = display.slice(display.indexOf(" - " + 4), )
             if (num2 >= 0) {
            answer =((+num1)-(+num2));
            result.innerHTML = +answer.toFixed(3);
             }
             else {
               result.innerHTML="ERROR"
             }
            }
        else if (operator === "*") {
            let num2 = display.slice(display.indexOf(" * " + 1), )
            if (num2 >= 0) {
                answer = ((+num1)*(+num2));
                result.innerHTML = +answer.toFixed(3);
            }
            else {
                result.innerHTML="ERROR"
            }
        }
        else {
            let num2 = display.slice(display.indexOf("/ " + 4), )
            console.log(num2);
            if ((+num2) > 0) {
                    answer = ((+num1)/(+num2))
                    result.innerHTML = +answer.toFixed(3);
            }
            else if (((+num1) === 0) && ((+num2) === 0)) {
                result.innerHTML = "0";
            }
            else {
                result.innerHTML = "undefined";
            } 
        }
    }
})