const containerDiv = document.querySelector(".container");

for (let index = 0; index < 16; index++) {
    const square = document.createElement("div");
    containerDiv.appendChild(square);
}