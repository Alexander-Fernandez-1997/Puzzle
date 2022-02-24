// todo

// seleccionar todas las tablillas
const tiles = document.querySelectorAll("td");

const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const empty = document.querySelector(".empty");
  const emptyColumn = empty.cellIndex;
  const emptyRow = empty.parentElement.rowIndex;
  // chequear si hay una tablilla vacia al costado
  return (tileRow === emptyRow && tileColumn === emptyColumn + 1 ||
          tileRow === emptyRow && tileColumn === emptyColumn - 1 ||
          tileColumn === emptyColumn && tileRow === emptyRow + 1 ||
          tileColumn === emptyColumn && tileRow === emptyRow - 1)
}

const moveTile = (tile) => {
  // intercambiar tablillas
  const empty = document.querySelector(".empty");
  empty.innerText = tile.innerText;
  tile.innerText = '';
  empty.classList.remove("empty");
  tile.classList.add("empty");
}

const playerWon = () => {
  // chequear si se completo el puzzle
  const tilesCompleted = Array.from(tiles).map(tile => tile.innerText);
  console.log(tilesCompleted.join());
  if (tilesCompleted.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
    alert("Ganaste");
  }
}

// escuchar al clic de cada tablilla
tiles.forEach((tile) => {
  tile.addEventListener("click", (e) => {
    if (canMove(tile)) {
      moveTile(tile);
      playerWon();
    }
    })
  })

const buttonHint = document.querySelector("#show-hint");
const hint = document.querySelector(".hint")
buttonHint.addEventListener("click", (e) => {
  hint.classList.add("active")
})
