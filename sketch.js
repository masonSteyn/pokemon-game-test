  var titleSong;
  var stage = "start";

  function preload(){
    charmanderS = loadImage("charmander.png")
    bulbasaurF = loadImage("bulbasaur front.png")
    squirtleS = loadImage("squirtle side.png")
    pokemonLogo = loadImage("pokemon.png")
    titleSong = loadSound("Opening.mp3")
    fight = loadSound("pokemon battle.mp3")
  }
  function setup(){
    titleSong.loop();
    createCanvas(1440,750)
    
  //logo
  logo = createSprite(720,384)
  logo.addImage(pokemonLogo)
  logo.scale = 0.5
//charmander
  charmander = createSprite(400,400)
  charmander.addImage(charmanderS)
  charmander.scale = 0.3
  charmander.visible = false
//squirtle
  squirtle = createSprite(1100,400)
  squirtle.addImage(squirtleS)
  squirtle.scale = 0.6
  squirtle.visible = false
//bulbasaur
  bulbasaur = createSprite(730,400)
  bulbasaur.addImage(bulbasaurF)
  bulbasaur.scale = 0.4
  bulbasaur.visible = false
  
  }
  function draw(){
    background("gray")
    drawSprites()
    
    if (stage == "start"){
    textSize(50)
    fill(255)
    text("press space",600,600)
    }

   

    if (stage == "start" && keyDown("space")){
    stage = "stage1"
    titleSong.stop()
    logo.visible = false
    }
  }
