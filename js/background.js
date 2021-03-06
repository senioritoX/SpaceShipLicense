function Background(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = "./img/cave.png";

  this.x = 0;
  this.y = 0;

  this.dx = game.dx;
}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.game.canvas.width,
    this.game.canvas.height
  );
  this.game.ctx.drawImage(
    this.img,
    this.x + this.game.canvas.width,
    this.y,
    this.game.canvas.width,
    this.game.canvas.height
  );
};

Background.prototype.move = function() {
  this.x -= this.dx;

  if (this.x < -this.game.canvas.width) this.x = 0;
};
