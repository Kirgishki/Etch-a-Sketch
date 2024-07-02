const container = document.createElement("div");
const body = document.querySelector("body");
container.classList.add("container");
body.appendChild(container);

for (let i = 1; i <= 256; i++) {
    const divSquare = document.createElement('div');
    divSquare.style.width = "10px";
    divSquare.style.height = "10px";

    container.appendChild(divSquare);
}

