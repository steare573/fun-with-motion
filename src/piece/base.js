function BasePiece (config) {
  this.config = config || {};
  this.x = config.x;
  this.y = config.y;
  this.speed = config.speed || 1;
  this.id = config.id || 'basePiece'
};

BasePiece.prototype.draw = function draw () {
  var piece = document.getElementById(this.id);

  if (!piece) {
    piece = this.initializePiece();
  }

  piece.style.top = this.y + 'px';
  piece.style.left = this.x + 'px';
}

BasePiece.prototype.initializePiece = function initializePiece () {
  var piece = document.createElement('span');
  piece.setAttribute('id', this.id);
  document.getElementsByTagName('body')[0].appendChild(piece);
  piece.style.position = 'absolute';
  piece.style.height = '10px';
  piece.style.width = '10px';
  piece.style.margin = '0';
  piece.style.padding = '0';
  piece.style.backgroundColor = 'blue';

  return piece;
}

BasePiece.prototype.move = function (xPix, yPix) {
  this.x += (xPix * this.speed);
  this.y += (yPix * this.speed);
  this.draw();
}

BasePiece.prototype.moveRight = function moveRight (pix) {
  this.move(pix, 0);
}

BasePiece.prototype.moveLeft = function moveLeft (pix) {
  this.move(pix * -1, 0);
}

BasePiece.prototype.moveUp = function moveUp (pix) {
  this.move(0, pix * -1);
}

BasePiece.prototype.moveDown = function moveDown (pix) {
  this.move(0, pix * 1);
}

BasePiece.prototype.getPosition = function getPosition () {
  return {
    x: this.x,
    y: this.y
  };
}
module.exports = BasePiece;
