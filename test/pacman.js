var pacman;
var ghosts = [];
var dots = [];
var lives;
var score;
var ghostRed, ghostGreen, ghostBlue, ghostOrange;
var pacmanLeft1, pacmanLeft2, pacmanLeft3, pacmanRight1, pacmanRight2, pacmanRight3;
var heart;
var sirenSound, gameoverSound, startSound, scoreSound;
var gameStarted;

function preload()
{
  // load in ghost images
  ghostRed = loadImage('ghost_red.png');
  ghostGreen = loadImage('ghost_green.png');
  ghostOrange = loadImage('ghost_orange.png');
  ghostBlue = loadImage('ghost_blue.png');
  
  // load in pacman images
  pacmanLeft1 = loadImage('pacman_left_1.png');
  pacmanLeft2 = loadImage('pacman_left_2.png');
  pacmanLeft3 = loadImage('pacman_left_3.png');
  pacmanRight1 = loadImage('pacman_right_1.png');
  pacmanRight2 = loadImage('pacman_right_2.png');
  pacmanRight3 = loadImage('pacman_right_3.png');
  
  // load in heart image
  heart = loadImage('heart.png');
  
  // load in sounds
  soundFormats('mp3', 'ogg');
  sirenSound = loadSound('siren.mp3');
  gameoverSound = loadSound('gameover.mp3');
  scoreSound = loadSound('score.mp3');
  startSound = loadSound('start.mp3');
  
}

function setup() 
{
  // set canvas size
  createCanvas(800, 400);
  
  // create pacman object
  pacman = new Pacman();
  
  // default lives and score values
  lives = 3;
  score = 0;
  
  // create clear button
  startButton = createButton('Start Game');
  startButton.position(375, 200);
  startButton.mousePressed(startGame);
  
  // set gameStarted equal to false
  gameStarted = false;
  
}

function draw() 
{
  background(0);

  if(gameStarted == true)
  {
  
    // hide start button
    startButton.hide();
  
    // display score
    fill(200);
    noStroke();
    textSize(24);
    text("Score: " + score, 30, 50);
  
    // display number of lives
    switch(lives)
    {
      case 3:
        image(heart, 650, 30);
        image(heart, 690, 30);
        image(heart, 730, 30);
      break;
      case 2:
        image(heart, 690, 30);
        image(heart, 730, 30);
      break;
      case 1:
        image(heart, 730, 30);
      break;
    }

    // display pacman
    pacman.display();
  
    // random ghost hatching
    var ghostHatch = Math.ceil(random(30));
    if(ghostHatch == 1)
    {
      ghosts.push(new Ghost());
    }
  
    // random dot hatching
    var dotHatch = Math.ceil(random(30));
    if(dotHatch == 1)
    {
      dots.push(new Dot());
    }
  
    // loop through each ghost
    for (var i=0; i<ghosts.length; i++) 
    {
      // display ghost
      ghosts[i].display();
    
      // check if ghost reaches bottom of the screen
      if(ghosts[i].ypos > 500)
      {
        // remove ghost
        ghosts.splice(i, 1);
      
      } else {
      
        // check if pacman is touching ghost
        var d1 = dist(ghosts[i].xpos, ghosts[i].ypos, pacman.xpos, pacman.ypos);
        if(d1 < 50)
        {
          // remove ghost
          ghosts.splice(i, 1);
         
          // decrease lives by one
          lives --;
         
          // play siren sound
          sirenSound.play();
        }
      }
    }

    // loop through each dot
    for (var j=0; j<dots.length; j++) 
    {
      // display dots
      dots[j].display();
    
      // check if dot reaches bottom of screen
      if(dots[j].ypos > 500)
      {
        // remove dot
        dots.splice(j, 1);
    
      } else {
    
        // check if pacman is touching dot
        var d2 = dist(dots[j].xpos, dots[j].ypos, pacman.xpos, pacman.ypos);
        if(d2 < 25)
        {
          // remove dot
          dots.splice(j, 1);
        
          // increase score by one
          score++;
        
          // play score sound
          scoreSound.play();
        }
      }
    }
  
    // check for game over
    if(lives <= 0)
    {
      // reset lives and score
      lives = 3;
      score = 0;
      
      // reset pacman's position
      pacman.xpos = 400;
      pacman.direction = "stopped";
    
      // remove ghosts and dots
      ghosts = [];
      dots = [];
      
      // play gameover sound
      gameoverSound.play();
      
      // set gameStarted to false
      gameStarted = false;
    }
  
  } else {
	  
    // show start button
    startButton.show();
	  
  }
}

function startGame()
{
  // change gameStarted variable
  gameStarted = true;
  
  // play starting sound
  startSound.play();
}

function keyPressed()
{
  // if the right arrow was pressed
  if(keyCode == RIGHT_ARROW)
  {
    // change pacman's direction property
    pacman.direction = 'right';
  }
  
  // if the left arrow was pressed
  if(keyCode == LEFT_ARROW)
  {
    // change pacman's direction property
    pacman.direction = 'left';
  }
}

///////////////////////////////////////////
// PACMAN CLASS
///////////////////////////////////////////

function Pacman()
{
  // set default properties
  this.xpos = 400;
  this.ypos = 350;
  this.speed = 4;
  this.direction = "stopped";
  
  // mouthCounter will determine which pacman sprite to display (1, 2 or 3)
  this.mouthCounter = 1;
}

Pacman.prototype.display = function()
{
  // check for every fifth frame
  // is the current frameCount divisible by 5?
  if(frameCount % 5 === 0)
  {
    // if the mouthCounter is equal to 3, reset mouthCounter by setting it equal to 1
    // otherwise, increment mouthCounter
    if(this.mouthCounter == 3)
    {
      this.mouthCounter = 1;
    } else {
      this.mouthCounter++;
    }
  }
  
  imageMode(CENTER);
  
  // if pacman is facing right
  if(this.direction == 'right')
  {
    // display the correct sprite image based on the mouthCounter
    switch(this.mouthCounter)
    {
      case 1: 
        image(pacmanRight1, this.xpos, this.ypos); 
      break;
      case 2: 
        image(pacmanRight2, this.xpos, this.ypos); 
      break;
      case 3: 
        image(pacmanRight3, this.xpos, this.ypos); 
      break;
    }
    
    // move pacman to the right
    this.xpos = this.xpos + this.speed;
  }
  
  // if pacman is facing left
  if(this.direction == 'left')
  {
    // display the correct sprite image based on the mouthCounter
    switch(this.mouthCounter)
    {
      case 1: 
        image(pacmanLeft1, this.xpos, this.ypos); 
      break;
      case 2: 
        image(pacmanLeft2, this.xpos, this.ypos); 
      break;
      case 3: 
        image(pacmanLeft3, this.xpos, this.ypos); 
      break;
    }
    
    // move pacman to the left
    this.xpos = this.xpos - this.speed;
  }
  
  // if pacman is just starting out and hasn't started moving yet
  if(this.direction == 'stopped')
  {
    image(pacmanLeft1, this.xpos, this.ypos);
  }
  
  // wrap pacman if pacman reaches the edge of the screen
  if(this.xpos > 800)
  {
    this.xpos = 0;
  }
  if(this.xpos < 0)
  {
    this.xpos = width;
  }
}

///////////////////////////////////////////
// GHOST CLASS
///////////////////////////////////////////

function Ghost()
{
  // set default properties
  this.xpos = random(0, width);
  this.ypos = 0;
  this.speed = random(1, 4);
  this.type = Math.ceil(random(4));
}

Ghost.prototype.display = function()
{
  imageMode(CENTER);
  
  // show different color ghost based on it's random 'type' value
  switch(this.type)
  {
    case 1: image(ghostRed, this.xpos, this.ypos, 42, 44); break;
    case 2: image(ghostGreen, this.xpos, this.ypos, 42, 44); break;
    case 3: image(ghostOrange, this.xpos, this.ypos, 42, 44); break;
    case 4: image(ghostBlue, this.xpos, this.ypos, 42, 44); break; 
  }
  this.ypos = this.ypos + this.speed;
}

///////////////////////////////////////////
// DOT CLASS
///////////////////////////////////////////

function Dot()
{
  // set default properties
  this.xpos = random(0, 600);
  this.ypos = 0;
  this.speed = random(1, 4);
}

Dot.prototype.display = function()
{
  ellipseMode(CENTER);
  fill(200);
  noStroke();
  ellipse(this.xpos, this.ypos, 25, 25);
  this.ypos = this.ypos + this.speed;
}