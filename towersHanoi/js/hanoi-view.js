class View {
  
  constructor (game, $domEl) {
    this.game = game; 
    this.element = $domEl;
    this.setupTowers();
    this.clickTower();
    // this.render();
    this.fromTower = null;
  }
  
  clickTower() {
    $("ul").on("click", (event) => {
      console.log("Ive been clicked");
      let $tower = $(event.currentTarget);
      if (this.fromTower === null) {
        this.fromTower = $tower.data("pos");
      } else {
        this.game.move(this.fromTower, $tower.data("pos"));
        this.fromTower = null;
      }
      this.render();
    });
  }

  setupTowers () {
    for (let i = 0; i < 3; i++) {
      let $ul = $("<ul></ul>");
      $ul.data("pos", i);
      if (i === 0) {
        for (let j = 0; j < 3; j++) {
          let $li = $("<li> ºuº </li>");
          $li.data("size", j+1);
          $li.css("width", (j+1) * 65);
          $ul.append($li);
        }
      }
      this.element.append($ul);
    }
  }
  
  render() {
    // let $li = $("li");
    // for (let i = 0; i < this.game.towers.length; i++) {
    //   for (let j = this.game.towers[i].length - 1; j > 0; j--) {
    //     for(let k = 0; k < $li.length; k++) {
    //       if ($li[k].data("size") === this.game.towers[i][j]) {
    //         let target = $li[k];
    //       }
    //     }
    //   }
    // }
    let $disc = $("li")[0];
    $("ul")[1].append($disc);
  }
}

module.exports = View;