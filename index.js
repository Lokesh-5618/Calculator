let n1 = null;
let n2 = null;
let operator = null;
let displayValue = "";
let operationvalue="";

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b==0||a==0)
        {
            return "Math Error"
        }
    
    else
    {
        return a / b;
    }
    
}

function compute(n1, n2, operator) { 
    if (operator === "+") {
        return add(n1, n2);
    } else if (operator === "-") {
        return sub(n1, n2);
    } else if (operator === "x") {
        return multiply(n1, n2);
    } else {
        return divide(n1, n2);
    }
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const operationDisplay = document.getElementById("operation-display");


function handleinput(input)
{
    if (input === "C") {
        displayValue = "";
        operationvalue=""
        n1 = null;
        n2 = null;
        operator = null;
    } else if (input >= "0" && input <= "9"||input==".") {
        if (input === "." && displayValue.includes(".")) {
            return; 
        }
        displayValue += input;
        operationvalue+=input;
    } else if (input === '+' || input === '-' ||input === 'x' || input === '/') {
        if (n1 !== null && operator !== null) {
            n2 = parseFloat(displayValue);
            n1 = compute(n1, n2, operator);
            displayValue = n1.toString();
            display.value = displayValue;
            
            
    
        } 
    
        else {
            n1 = parseFloat(displayValue);
        }
        operationvalue+=""+input+"";
    
        displayValue = "";
        operator = input;
    } 
    else if(input==="BS")
        {
            displayValue = displayValue.slice(0, -1);
           operationvalue= operationvalue.slice(0, -1);
        }
    else if (input === '=') {
        if (n1 !== null && operator !== null) {
            n2 = parseFloat(displayValue);
            displayValue = compute(n1, n2, operator).toString();
            n1 = null;
            n2 = null;
            operator = null;
        }
        operationvalue+= " " + input + " ";
    }
    if(displayValue==NaN)
        {
        displayValue="Syntax Error"
        }
    else{
        display.value = displayValue;
        operationDisplay.value = operator ? operationvalue: "";
        
    }
}
buttons.forEach(button=>
    {
        button.addEventListener("click",()=>
        {
            const butText=button.textContent;
            handleinput(butText)
        })
    }
)
document.addEventListener("keydown",(event)=>{
           const key=event.key;
           if (key >= "0" && key <= "9" || key === "." || key === "+" || key === "-" || key === "x" || key === "/" || key === "=" || key === "Enter" || key === "Backspace") {
            event.preventDefault()
         }
         if(key==="Backspace")
            {
                handleinput("BS")
            }
         else if(key==="Enter"){
            handleinput("=")
         }
         else if(key==="c")
            {
                handleinput("C")
            }
         else
         {
            handleinput(key);
         }
})
