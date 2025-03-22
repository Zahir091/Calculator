mainGroup = document.querySelector(".btn-group");
let screenDisplay = 0;

const ButtonArray = [];


class Button {
    constructor(value) {
        this.value = value;
        this.buttonStruct = document.createElement('button');
        this.buttonStruct.classList.add('buttonStyle');
        this.buttonStruct.id = `${value}`;
        this.buttonStruct.textContent = value;
    }
}



function generateRow() {
    let n = 1;
    for(let j=1; j<4; j++) {
        const btnRow = document.createElement('div');
        btnRow.classList.add('btn-row');
        for(let i=n; i<(n+3); i++) {
            const btn = new Button(i);
            btnRow.append(btn.buttonStruct);
        }
        n+=3;
        mainGroup.append(btnRow);
        console.log(mainGroup);
    }

}

generateRow();

