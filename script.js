const contentDiv = document.querySelector(".container");
const btn = document.querySelector(".btn")


// for (let i = 0; i < gridSize * gridSize; i++) {
//     const contentSquare = document.createElement("div");
//     // cara 1
//     // contentSquare.style.width = `calc(100% / ${gridSize})`;
//     // contentSquare.style.height = `calc(100% / ${gridSize})`;
//     contentSquare.classList.add("square")
//     contentSquare.addEventListener("mouseover", () => {
//         contentSquare.style.backgroundColor = "blue";
//     });
//     contentDiv.appendChild(contentSquare);
// }

// pembuatan function createGrid(size)
function createGrid(size) {
    // fungsinya untuk ngeclear isi dalem htmlnya
    contentDiv.innerHTML = '';
    // cara 2 - efisien
    contentDiv.style.setProperty("--grid-rows", size);
    for (let i = 0; i < size * size; i++) {
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
}

// button klik
btn.addEventListener("click", () => {
    let input = prompt("Mau angka berapa? Jangan banyak-banyak nanti lemot")
    if (input > 0 && input < 100) {
        createGrid(input);
    } else {
        alert("Kegedean woi maksimal 100 aja")
    }
});

// jalanin fungsinya biar kodenya gak kosong
createGrid(9);
