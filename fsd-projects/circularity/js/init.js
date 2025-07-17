    function init(window) {
    'use strict';
    var
        draw = window.opspark.draw, physikz = window.opspark.racket.physikz, app = window.opspark.makeApp(), canvas = app.canvas, view = app.view, fps = draw.fps('#000');


    window.opspark.makeGame = function () {

        window.opspark.game = {};
        var game = window.opspark.game;

        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        // TODO 1 : Declare and initialize our variables
        var circle; // variable to hold a single circle when creating circles / iterating
        var circles = []; // variable to store all circles in an array

        // TODO 2 : Create a function that draws a circle
        function drawCircle(x, y, radius, color) {
            var circle = draw.circle(radius, color);
            circle.x = x;
            circle.y = y;
            circle.fill = black;
            return circle;
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }




        // TODO 3 : Call the drawCircle() function
        for (var i = 0; i < circleCount; i++) {
            var x = Math.random() * canvas.width;
            var y = Math.random() * canvas.height;
            var color = physikz.getRandomColor();
            circle = drawCircle(x, y, circleRadius, color);
            circles.push(circle);
           //drawCircle(5);
        }


        // TODO 4 : Update the position of each circle using physikz.updatePosition()
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            physikz.updatePosition(circle, 1, 1); // Update the position of each circle
            game.checkCirclePosition(circle); // Check if the circle is off screen
            physikz.updatePosition( /* bracket notation to access the first circle */);
            physikz.updatePosition( /* bracket notation to access the second circle */);
            physikz.updatePosition( /* bracket notation to access the third circle */);
            physikz.updatePosition( /* bracket notation to access the fourth circle */);
            physikz.updatePosition( /* bracket notation to access the fifth circle */);
        }
        // TODO 5 : Call game.checkCirclePosition() on your circles
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            game.checkCirclePosition(circle); // Check if the circle is off screen
            game.checkCirclePosition( /* bracket notation to access the first circle */);
            game.checkCirclePosition( /* bracket notation to access the second circle */);
            game.checkCirclePosition( /* bracket notation to access the third circle */);
            game.checkCirclePosition( /* bracket notation to access the fourth circle */);
            game.checkCirclePosition( /* bracket notation to access the fifth circle */);
        }
        // TODO 6 : Draw each circle using drawCircle()
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            drawCircle(circle.x, circle.y, circleRadius, circle.fill); // Redraw each
            circle;
        }

        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 25; i++) {
            // You can add code here to create circles if needed
        }

        // End of makeGame function
    };

    // End of init function
}


// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}