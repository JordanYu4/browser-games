class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.game.playMove([1,2]);
  }

  makeMove($square) {
    
  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    for (var i = 0; i < 9; i++) {
      let x = Math.floor(i / 3);
	    let y = i % 3;
      let $li = $("<li>test</li>");
      $li.data("pos", [x,y]);
      $ul.append($li);
    }
    this.el.append($ul);
  }
}

module.exports = View;
