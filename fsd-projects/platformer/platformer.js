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
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(400, 300, 100, 10);
    createPlatform(690, 370, 100, 20);
    createPlatform(600, 620, 100, 20);
    createPlatform(900, 300, 100, 20);
    createPlatform(400, 500, 100, 20);
    createPlatform(1100, 400, 100, 20);
    // TODO 3 - Create Collectables
    createCollectable("database", 1100, 110, 0.3, 0.3);
    createCollectable("database", 900, 110, 0.3, 0.3);
    createCollectable("database", 400, 110, 1, 1);

    // TODO 4 - Create Cannons
    createCannon("top", 620, 920, 20, 20, 600, 980, 2);
    createCannon("right", 900, 1, 30, 30, 90, 900, 0.5);
    createCannon("right", 390, 2000,)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
