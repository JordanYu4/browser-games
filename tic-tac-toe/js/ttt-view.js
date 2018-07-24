class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", (event) => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    let pos = $square.data("pos");
    
    if (!this.game.board.isEmptyPos(pos)) {
      alert("Position already taken!");
    } else {
      this.game.playMove(pos);
      $square.addClass(this.game.currentPlayer);
    }
    
    if (this.game.isOver()) {
      alert(`${this.game.currentPlayer} has won!`);
    }
  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    for (var i = 0; i < 9; i++) {
      let x = Math.floor(i / 3);
	    let y = i % 3;
      let $li = $("<li></li>");
      $li.data("pos", [x,y]);
      $ul.append($li);
    }
    this.el.append($ul);
  }
}

module.exports = View;
