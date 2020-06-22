var gameState=0;
var playerCount=0;
var database;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1img,car2img,car3img,car4img;
var track;


function preload(){
   car1img=loadImage("images/car1.png");
   car2img=loadImage("images/car2.png");
   car3img=loadImage("images/car3.png");
   car4img=loadImage("images/car4.png");
   track=loadImage("images/track.jpg");

}
function setup(){
    createCanvas(displayWidth-20,displayHeight+50);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
   if(playerCount===4){
       game.update(1);
   }
   if(gameState===1){
    clear();   
    game.play();
   }
    
}



