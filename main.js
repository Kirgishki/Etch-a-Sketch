const body = document.querySelector("body");
const container = document.createElement("div");
const btnEnterValue = document.createElement("button");

const containerWidth = 850;
const containerGap = 2;
let numOfSquaresPerSide = 64;

container.style.width = containerWidth + "px";
container.style.gap = containerGap + "px";


container.classList.add("container");
btnEnterValue.innerText = "Change Number of Squares";

body.appendChild(btnEnterValue);
body.appendChild(container);

fillContainerWithSquares(numOfSquaresPerSide, container, containerWidth, containerGap);

function fillContainerWithSquares(numOfSquaresPerSide, container, widthOfDiv, gap){

    let totalSquares = numOfSquaresPerSide * numOfSquaresPerSide ;
    let sumGapPerSide = gap * (numOfSquaresPerSide - 1);
    let squareSideSize = (widthOfDiv - sumGapPerSide) / numOfSquaresPerSide;

    for (let i = 1; i <= totalSquares; i++) {
        const divSquare = document.createElement('div');

        divSquare.style.width = squareSideSize + "px";
        divSquare.style.height = squareSideSize + "px";

        container.appendChild(divSquare);
    }
}

btnEnterValue.addEventListener('click', ()=>{
    numOfSquaresPerSide = prompt("Unesite broj kvadrata po redu:");
    container.replaceChildren();
    fillContainerWithSquares(numOfSquaresPerSide, container, containerWidth, containerGap);
});