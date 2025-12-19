const gridSize = 81;

const contentDiv = document.querySelector(".container");

// cara 2 - efisien
contentDiv.style.setProperty("--grid-rows",gridSize);

for (let i = 0; i < gridSize * gridSize; i++) {
    const contentSquare = document.createElement("div");
    // cara 1
    // contentSquare.style.width = `calc(100% / ${gridSize})`;
    // contentSquare.style.height = `calc(100% / ${gridSize})`;
    contentSquare.classList.add("square")
    contentSquare.addEventListener("mouseover", () => {
        contentSquare.style.backgroundColor = "blue";
    });
    contentDiv.appendChild(contentSquare);
}