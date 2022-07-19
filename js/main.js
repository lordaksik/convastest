var canvas = document.getElementById('games');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  canvas.width = 1500
  canvas.height = 720
}
let set = new Set();
var img = new Image();
img.src = 'img/fon.png'
var timers = 100;
var center = 720;
var speed=0;
var mol = new Image()
mol.src = 'img/run_right.png'
let player = {
  x: 300,
  y: 400,
  height:250,
  width:150,
  speed:0,
  imgX:700,
  imgY:0,
  xe:0,
  xy:0,
  stopX:0,
  stopY:0
}
let player1Atack = {
  y1: 20,
  y2: 45
}
let player2 = {
  x: 1100,
  y: 400
}

function animac(){
 speed++

  player.xe=0;
  player.xy=0;
  player.stopY=0;
  if(speed%5===0){
    if(speed!==15) {
      player.imgX+=100;
    }
    else{
      player.imgX=700;
      speed=0;
    }
  }


}
document.addEventListener("keydown", playerFirst);
document.addEventListener("keyup", playerUp);
document.addEventListener("keydown", playerTwo);
document.addEventListener("keyup", playerUp2);


function playerFirst(event) {


  if(event.code === 'KeyA') {
     set.add('KeyA')
 }
  if (event.code === 'KeyW') {
     set.add('KeyW')
  }
  if (event.code === 'KeyD') {
   set.add('KeyD')
}
if (event.code === 'KeyE') {
 set.add('KeyE')
}
}
function playerTwo(event) {

  if (event.code === 'KeyJ') {
    set.add('KeyJ')
  }
  if (event.code === 'KeyI') {
    set.add('KeyI')
  }
  if (event.code === 'KeyL') {
    set.add('KeyL')
  }
}
function playerUp(event) {
  if(event.code === 'KeyA') {
      set.delete('KeyA')
     }
     if(event.code === 'KeyW') {
  set.delete('KeyW')
    }
    if(event.code === 'KeyD') {
       set.delete('KeyD')
    }
    if(event.code === 'KeyE') {
       set.delete('KeyE')
    }
  if ((set.has('KeyD')===false)&&(set.has('KeyA')===false)&&(set.has('KeyW')===false)) {
    player.xe = 950
    player.xy = 2000
    player.imgX=250
        player.imgYg=150
  }
    }
function playerUp2(event) {
  if (event.code === 'KeyJ') {
    set.delete('KeyJ');
  }
  if (event.code === 'KeyI') {
    set.delete('KeyI');
  }
   if (event.code === 'KeyL') {
     set.delete('KeyL');
  }
    }
function movePlayr(){
 // ctx.drawImage(mol, player.imgX,player.imgY,800,1050,player.x, player.y, player.width, player.height);//x картинки y картинки ширина и высота картинки

  if (set.has('KeyA')===true) {
    if (player.x > 0) {
      player.x = player.x - 5;
    }
  }
  if (set.has('KeyW')===true) {
    if (player.y > 150) {
      player.y = player.y - 10;
    }

  }
  if (set.has('KeyD')===true) {
    if (player.x < 1350) {
      player.x = player.x + 5;
    }

  }
  if ((set.has('KeyD')===true) || (set.has('KeyA')===true)||(set.has('KeyW')===true)){
    animac();
  }
  if (set.has('KeyE')===true) {
    if (player1Atack.y1 < 115 ) {
      player1Atack.y1 = player1Atack.y1 + 5;
      player1Atack.y2 = player1Atack.y2 + 5;
    }
    else{
      player1Atack.y1=20;
      player1Atack.y2=45;
    }
  }
}
function movePlayrTwo(){
  if (set.has('KeyJ')===true) {
    if (player2.x > 0) {
      player2.x = player2.x - 2;
    }
  }
  if (set.has('KeyI')===true) {
    if (player2.y > 150) {
      player2.y = player2.y - 10;
    }
  }
  if (set.has('KeyL')===true) {
    if (player2.x < 1450) {
      player2.x = player2.x + 2;
    }
  }
}




function draw() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(mol, player.imgX+player.xe,player.imgY+player.xy,100,115,player.x, player.y, player.width, player.height);//x картинки y картинки ширина и высота картинки


  ctx.strokeStyle = 'OrangeRed';
  ctx.strokeRect(100, 40, 550, 50)
  ctx.fillStyle = 'LawnGreen'; // меняем цвет клеток
  ctx.fillRect(100, 40, 550, 50);

  ctx.strokeStyle = 'OrangeRed';
  ctx.strokeRect(850, 40, 550, 50)
  ctx.fillStyle = 'LawnGreen'; // меняем цвет клеток
  ctx.fillRect(850, 40, 550, 50);

  ctx.font = '50px serif';
  ctx.fillStyle = 'black'
  if (timers < 10) {
    center = 740;
  }
  movePlayr()
  movePlayrTwo()
  ctx.fillText(timers, center, 80);

  //ctx.fillStyle = 'red'; // меняем цвет клеток
  if (player.y < 400) {
    player.y = player.y + 5;
  }
  //ctx.drawImage(mol, player.imgX,player.imgY,800,1050,player.x, player.y, player.width, player.height);//x картинки y картинки ширина и высота картинки


  ctx.fillStyle = 'yellow'; // меняем цвет клеток
  if (player2.y < 400) {
    player2.y = player2.y + 3;
  }
  ctx.fillRect(player2.x, player2.y, 50, 200);

  requestAnimationFrame(draw)
}

function texts() {
  if (timers > 0) {
    timers--
  }
}
setInterval(texts, 1000)
img.onload = draw;
