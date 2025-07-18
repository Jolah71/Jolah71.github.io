$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
//toggleGrid() 


    // TODO 2 - Create Platforms
createPlatform(50,170,200,20,"purple");
createPlatform(200,270,200,20,"orange");
createPlatform(450,570,200,20,"green");
createPlatform(550,370,200,20,"blue");
createPlatform(650,700,200,20,"red");


    // TODO 3 - Create Collectables
createCollectable("steve",400,400);
createCollectable("max",300,300); 
createCollectable("grace",600,600);

    // TODO 4 - Create Cannons
createCannon("left",300,900);
createCannon("top",300,1200);
createCannon("right",300,900);


  
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
