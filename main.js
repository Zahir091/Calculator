mainGroup = document.querySelector(".btn-group");
let screenDisplay = 0;

const ButtonArray = [];
const operations = ['/', 'x', '-', '+', '='];
operations.reverse();

class Button {
    constructor(value) {
        this.value = value;
        this.buttonStruct = document.createElement('button');
        this.buttonStruct.classList.add('buttonStyle');
        this.buttonStruct.id = `${value}`;
        this.buttonStruct.textContent = value;
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
                const btn = new Button('cancel');
                btnRow.append(btn.buttonStruct);
           }
           else if (i===2) {
                const btn = new Button('+ / -');
                btnRow.append(btn.buttonStruct);
           }
           else if (i === 3) {
                const btn = new Button('%');
                btnRow.append(btn.buttonStruct);
           }
            else if(i%4 != 0) {
                number++;
                switch(number) {
                    case 10:  {
                        const btn = new Button('sqrt()');
                        btnRow.append(btn.buttonStruct);
                        break;
                    }
                    case 11:  {
                        const btn = new Button('0');
                        btnRow.append(btn.buttonStruct);
                        break;
                    }
                    case 12:  {
                        const btn = new Button('.');
                        btnRow.append(btn.buttonStruct);
                        break;
                    }
                    default: {
                        const btn = new Button(number);
                        btnRow.append(btn.buttonStruct);
                    } 
                }
    
            }
            else {
                const btn = new Button(operations.pop());
                btnRow.append(btn.buttonStruct);
            }
        }
        n += 4;
        mainGroup.append(btnRow);
        console.log(mainGroup);
    }
}

genCalc();

