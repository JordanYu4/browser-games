class View {
  
  constructor (game, $domEl) {
    this.game = game; 
    this.element = $domEl;
    this.setupTowers();
    this.bindEvents();
  }
  
  bindEvents () {
    
  }

  setupTowers () {
    for (let i = 0; i < 3; i++) {
      let $ul = $("<ul></ul>");
      if (i === 0) {
        for (let j = 0; j < 3; j++) {
          let $li = $("<li>test</li>");
          $ul.append($li);
        }
      }
      this.element.append($ul);
    }
  }
}

module.exports = View;