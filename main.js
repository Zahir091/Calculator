main = document.querySelector(".btn-row");

class Button {
    constructor(value) {
        this.value = value;
        this.buttonStruct = document.createElement('button');
        this.buttonStruct.classList.add('buttonStyle');
        this.buttonStruct.textContent = value;
    }
}

for(let i=1; i<10; i++) {
    const numButton = new Button(i);
    numButton.buttonStruct.id = `${i}`;
    main.append(numButton.buttonStruct);
}



