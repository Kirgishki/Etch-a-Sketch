const body = document.querySelector("body");
const container = document.createElement("div");
const btnEnterValue = document.createElement("button");

container.classList.add("container");
btnEnterValue.innerText = "Change Number of Squares";

body.appendChild(btnEnterValue);
body.appendChild(container);

for (let i = 1; i <= 256; i++) {
    const divSquare = document.createElement('div');
    divSquare.style.width = "20px";
    divSquare.style.height = "20px";

    container.appendChild(divSquare);
}

