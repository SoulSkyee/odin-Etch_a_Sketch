const contentDiv = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const contentSquare = document.createElement("div");
    contentSquare.classList.add("square")
    contentSquare.addEventListener("mouseover", () => {
        contentSquare.style.backgroundColor = "blue";
    });
    contentDiv.appendChild(contentSquare);
}