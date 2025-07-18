function init(window) {
  "use strict";
  var draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz,
    app = window.opspark.makeApp(),
    canvas = app.canvas,
    view = app.view,
    fps = draw.fps("#000");

  window.opspark.makeGame = function () {
    window.opspark.game = {};
    var game = window.opspark.game;

    ///////////////////
    // PROGRAM SETUP //
    ///////////////////
    // TODO 1 : Declare and initialize our variables
    var circle = draw.randomCircleInArea(canvas, true, true, true); // variable to hold a single circle when creating circles / iterating
    var circles = []; // variable to store all circles

    // TODO 2 : Create a function that draws a circle
    function drawCircle() {
      circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
      physikz.addRandomVelocity(circle, canvas, 5, 5);
      view.addChild(circle);
      circles.push(circle);
      return circle;
    }

    // TODO 3 : Call the drawCircle() function
    for (var i = 0; i < 100; i++) {
    drawCircle();
    }

    //TODO 4 : Update the position of each circle using physikz.updatePosition()
    function update() {
      for (var i = 0; i < circles.length; i++) {
        physikz.updatePosition(circles[i]);
        game.checkCirclePosition(circles[i]);
      }
    }

    // TODO 5 : Call game.checkCirclePosition() on your circles
    game.checkCirclePosition = function (circle) {
      // Example implementation: wrap circles to the other side if they go off screen
      if (circle.x < 0) circle.x = canvas.width;
      if (circle.x > canvas.width) circle.x = 0;
      if (circle.y < 0) circle.y = canvas.height;
      if (circle.y > canvas.height) circle.y = 0;
    };
view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    

    // TODO 7 : Use a loop to create multiple circles
    

    // End of init function
  };

  // DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
  if (
    typeof process !== "undefined" &&
    typeof process.versions.node !== "undefined"
  ) {
    // here, export any references you need for tests //
    module.exports = init;
  }
}
