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
var anim=550;
var speed=0;
var mol = new Image()
mol.src = 'img/21034627.jpg'
let player1 = {
  x: 300,
  y: 400
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
  ctx.drawImage(mol, anim,0,800,1800,500, 100, 100, 400);
  speed++
  console.log(speed)
  if(speed%15===0){
    if(speed!==80) {
      anim += 1900;
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
  if (set.has('KeyA')===true) {
    if (player1.x > 0) {
      player1.x = player1.x - 2;
    }
  }
  if (set.has('KeyW')===true) {
    if (player1.y > 150) {
      player1.y = player1.y - 10;
    }
  }
  if (set.has('KeyD')===true) {
    if (player1.x < 1450) {
      player1.x = player1.x + 2;
    }
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
  //animac();

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

  ctx.fillStyle = 'red'; // меняем цвет клеток
  if (player1.y < 400) {
    player1.y = player1.y + 3;
  }

  ctx.fillRect(player1.x, player1.y, 50, 200);

  ctx.beginPath();
  ctx.moveTo(player1.x+50,player1.y+70);
  ctx.lineTo(player1.x+130,player1.y+player1Atack.y1);
  ctx.lineTo(player1.x+130,player1.y+player1Atack.y2);
  ctx.lineTo(player1.x+50,player1.y+95);
  ctx.fillStyle = 'yellow';
  ctx.fill();
   // меняем цвет клеток
  ctx.closePath()

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
