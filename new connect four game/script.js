const board = document.getElementById("board");
const rows = board.getElementsByTagName("tr");
let currentPlayer = "red";

for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].getElementsByTagName("td");
  for (let j = 0; j < cells.length; j++) {
    cells[j].addEventListener("click", function() {
      for (let k = rows.length - 1; k >= 0; k--) {
        if (!rows[k].getElementsByTagName("td")[j].style.backgroundColor) {
          rows[k].getElementsByTagName("td")[j].style.backgroundColor = currentPlayer;
          break;
        }
      }
      if (checkForWin(i, j)) {
        alert(currentPlayer + " wins!");
      }
      currentPlayer = currentPlayer === "red" ? "yellow" : "red";
    });
  }
}

function checkForWin(row, col) {
    const color = rows[row].getElementsByTagName("td")[col].style.backgroundColor;
    let count = 0;
  
    // Check horizontal cells
    for (let i = col; i < col + 4 && i < 7; i++) {
      if (rows[row].getElementsByTagName("td")[i].style.backgroundColor === color) {
        count++;
      } else {
        break;
      }
    }
  
    if (count === 4) {
      return true;
    }
  
    count = 0;
  
    // Check vertical cells
    for (let i = row; i >= row - 3 && i >= 0; i--) {
      if (rows[i].getElementsByTagName("td")[col].style.backgroundColor === color) {
        count++;
      } else {
        break;
      }
    }
  
    if (count === 4) {
      return true;
    }
  
    // More code to check for diagonal cells...
  
    return false;
  }
  
