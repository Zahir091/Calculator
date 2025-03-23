mainGroup = document.querySelector(".btn-group");
screen = document.querySelector(".screen");
let screenDisplay = '';



const ButtonArray = [];
const arithmetic = ['/', '*', '-', '+'];
arithmetic.reverse();



class Button {
    constructor(value, typeofButton) {
        this.value = value;
        this.type = typeofButton;
        this.buttonStruct = document.createElement('button');
        this.buttonStruct.classList.add('buttonStyle');
        this.buttonStruct.id = `${value}`;
        this.buttonStruct.textContent = value;
        this.buttonStruct.addEventListener('click', () =>  this.handleClick(this.type, this.value));
    }

    handleClick(type, value) {
        if (type === 'number' || type==='decimal') {
            screenDisplay += value;
            screen.textContent = screenDisplay;
        }
        else if (type === 'arithmetic') {
            if (arithmetic.includes(screenDisplay.charAt(screenDisplay.length - 1))) {
                console.log('Cannot use two operations at once');
            } else {
                screenDisplay += value;
                screen.textContent = screenDisplay;
            }
        }
        else if (type === 'equal') {
            try {
                let result = Function(`"use strict"; return (${screenDisplay})`)();
                this.finalResult(result);
            } catch (error) {
                console.error("Invalid expression", error);
                screen.textContent = "Error";
                screenDisplay = "";
            }
        }
        else if (type === 'delete') {
            screenDisplay = screenDisplay.slice(0,-1);
            screen.textContent = screenDisplay;
        }
    }

    finalResult(result) {
        screenDisplay = `${result}`;
        screen.textContent  = screenDisplay;
    }
}


function genCalc() {
    let n = 1; //nth row;
    let number = 0; //value of numbered buttons
    for(let j=1; j<6; j++) {
        const btnRow = document.createElement('div');
        btnRow.classList.add('btn-row');
        for(let i=n; i<(n+4); i++) { //i represents nth button
           if( i=== 1) {
                const btn = new Button('C', 'cancel');
                btnRow.append(btn.buttonStruct);
           }
           else if (i===2) {
                const btn = new Button('delete' , 'delete');
                btnRow.append(btn.buttonStruct);
           }
           else if (i === 3) {
                const btn = new Button('+/-' , 'sign');
                btnRow.append(btn.buttonStruct);
           }
           else if(i=== 20) {
            const btn = new Button('=' , 'equal');
            btnRow.append(btn.buttonStruct);
           }
            else if(i%4 != 0) {
                number++;
                switch(number) {
                    case 10:  {
                        const btn = new Button('(  )', 'paraenthesis');
                        btnRow.append(btn.buttonStruct);
                        break;
                    }
                    case 11:  {
                        const btn = new Button('0', 'number');
                        btnRow.append(btn.buttonStruct);
                        break;
                    }
                    case 12:  {
                        const btn = new Button('.', 'decimal');
                        btnRow.append(btn.buttonStruct);
                        break;
                    }
                    default: {
                        const btn = new Button(number , 'number');
                        btnRow.append(btn.buttonStruct);
                    } 
                }
            }
            else {
                const btn = new Button(arithmetic.pop(), 'arithmetic');
                btnRow.append(btn.buttonStruct);
            }
        }
        n += 4;
        mainGroup.append(btnRow);
        console.log(mainGroup);
    }
}

genCalc();
arithmetic = ['/', '*', '-', '+'];
