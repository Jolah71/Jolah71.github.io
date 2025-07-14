var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [],
        circle,
        circleCount = 10, // Number of circles to create    
        circleRadius = 20; // Radius of each circle



        // TODO 2 : Create a function that draws a circle
        function drawCircle(x, y, radius, color) {
            var circle = draw.circle(radius, color);
            circle.x = x;
            circle.y = y;
            view.addChild(circle);
            return circle;
        }

        


        // TODO 3 : Call the drawCircle() function
        for (var i = 0; i < circleCount; i++) {
            var x = Math.random() * canvas.width;
            var y = Math.random() * canvas.height;
            var color = physikz.getRandomColor();
            circle = drawCircle(x, y, circleRadius, color);
            circles.push(circle);
        }


        // TODO 4 : Update the position of each circle using physikz.updatePosition()
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            physikz.updatePosition(circle, 1, 1); // Update the position of each circle
        }
        // TODO 5 : Call game.checkCirclePosition() on your circles
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            game.checkCirclePosition(circle); // Check if the circle is off screen
        }
        // TODO 6 : Draw each circle using drawCircle()
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            drawCircle(circle.x, circle.y, circleRadius, circle.fill); // Redraw each
            circle
        }   
            
        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            physikz.updatePosition(circle, 1, 1); // Update the position of each circle
            game.checkCirclePosition(circle); // Check if the circle is off screen
        }   



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                physikz.updatePosition(circle, 1, 1); // Update the position of each circle
            }
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                game.checkCirclePosition(circle); // Check if the circle is off screen
            }   
            // TODO 6 : Draw each circle using drawCircle() 
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                drawCircle(circle.x, circle.y, circleRadius, circle.fill); // Redraw each circle
            } 
            
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // if the circle has gone past the LEFT side of the screen then place it on the RIGHT
            else if ( circle.x < 0 ) {
                circle.x = canvas.width;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
