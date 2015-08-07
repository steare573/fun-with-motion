document.addEventListener( "DOMContentLoaded", function(){
  var Base = require('./piece/base');
  var base = new Base({
    x: 10,
    y: 10,
    speed: 10
  });
  var MAP_HEIGHT = 100;
  var MAP_WIDTH = 100;
  base.draw();
  window.base = base;
  window.addEventListener('keydown', function (e) {

    var key = e.which;
    var pos = base.getPosition();

    switch(key) {
      case 38:
        if (pos.y > 0) {
          base.moveUp(1);
        }
        break;
      case 40:
        if (pos.y < MAP_HEIGHT) {
          base.moveDown(1);
        }
        break;
      case 37:
        if (pos.x > 0) {
          base.moveLeft(1);
        }
        break;
      case 39:
        if (pos.x < MAP_WIDTH) {
          base.moveRight(1);
        }
        break;
    }
  });
});
