/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game {
  constructor(HEIGHT, WIDTH) {
    this.HEIGHT = 6;
    this.WIDTH = 7;
    this.boardInMemory = [];
    this.currPlayer = 1;
    this.allowTurn = true;
    this.htmlBoard = document.getElementById("htmlBoard");
    this.makeBoard();
    this.makeHtmlBoard();
  }
  makeBoard() {
    for (let y = 0; y < this.HEIGHT; y++) {
      this.boardInMemory.push(Array.from({ length: this.WIDTH }));
    }
  }
  makeHtmlBoard() {
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    // this.top.addEventListener("click", handleClick);

    for (let x = 0; x < this.WIDTH; x++) {
      const headCell = document.createElement("td");
      headCell.setAttribute("id", x);
      top.append(headCell);
    }

    this.htmlBoard.append(top);

    // make main part of boardInMemory
    for (let y = 0; y < this.HEIGHT; y++) {
      const row = document.createElement("tr");

      for (let x = 0; x < this.WIDTH; x++) {
        const cell = document.createElement("td");
        cell.setAttribute("id", `${y}-${x}`);
        row.append(cell);
      }

      this.htmlBoard.append(row);
    }
  }
}

new Game(6, 7); // assuming constructor takes height, width
