const container = document.createElement("div");
const body = document.querySelector("body");
container.classList.add("container");
body.appendChild(container);

for (let i = 1; i <= 256; i++) {
    const divSquare = document.createElement('div');
    divSquare.style.width = "20px";
    divSquare.style.height = "20px";

    container.appendChild(divSquare);
}

