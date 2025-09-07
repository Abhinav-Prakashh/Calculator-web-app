const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const backspace = document.querySelector(".visual-box i");

let expression = "";

// ---ADDING CLICKING EVENTS TO THE UI---

buttons.forEach(function(button){
    button.addEventListener("click", function() {
        const value = button.textContent;

        if(button.classList.contains("number") || button.classList.contains("dot")){
            expression += value;
            display.value = expression;
        }
        else if(button.classList.contains("operator")){            
            if (value === "+/-") {
                if(expression.startsWith('-')){
                    expression = expression.slice(1);
                }
                else {
                    expression = '-' + expression;
                }
            }
            else if (value === "x") expression += "*";
            else if (value === "÷") expression += "/";
            else {
                expression += value;
            }
            display.value = expression;
        }
        else if (button.classList.contains("clear")){
            expression ="";
            display.value = "";
        }
        else if(button.classList.contains("equal")){
            expression = eval(expression).toString();
            display.value = expression;
        }
    });
});

backspace.addEventListener("click", function() {
    expression = expression.slice(0, -1);
    display.value = expression;
});

// --- KEYBOARD SUPPORT ---

document.addEventListener("keydown", function(e) {
    const key = e.key;

    if (key >= '0' && key <= '9'){
        expression += key;
        display.value = expression;
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        expression += key;
        display.value = expression;
    }
    else if (key === 'Enter' || key === '=') {
        expression = eval(expression).toString();
        display.value = expression;
    }
    else if (key === 'Backspace') {
        expression = expression.slice(0, -1);
        display.value = expression;
    }
    else if (key === 'c' || key === 'C') {
        expression = "";
        display.value = "";
    }
    else if(key === '.'){
        expression += key;
        display.value = expression;
    }
});