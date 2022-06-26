var canvas = document.getElementById('games');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  canvas.width = 1500
  canvas.height = 720
}
var img = new Image();
img.src = 'img/1700.jpg'
var timer = 100;
var center = 720;
let player1 = {
  x: 300,
  y: 400
}
let player2 = {
  x: 1100,
  y: 400
}

document.addEventListener("keydown", playerFirst);
document.addEventListener("keydown", playerTwo);


function playerFirst(event) {
  console.log(event.code)
  if (event.code === 'KeyA') {

    if (player1.x > 0) {
      player1.x = player1.x - 20;
    }
  }

  if (event.code === 'KeyW' && player1.y === 400) {

    if (player1.y > 0) {
      player1.y = player1.y - 200;
    }
  }
  if (event.code === 'KeyD') {
    if (player1.x < 1450) {
      player1.x = player1.x + 20;
    }
  }
}

function playerTwo(event) {
  console.log(event.code)
  if (event.code === 'ArrowLeft') {

    if (player2.x > 0) {
      player2.x = player2.x - 20;
    }
  }
  if (event.code === 'ArrowUp' && player2.y === 400) {

    if (player2.y > 0) {
      player2.y = player2.y - 200;
    }
  }
   if (event.code === 'ArrowRight') {
    if (player2.x < 1450) {
      player2.x = player2.x + 20;
    }
  }
}


function draw() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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
  if (timer < 10) {
    center = 740;
  }
  ctx.fillText(timer, center, 80);

  ctx.fillStyle = 'red'; // меняем цвет клеток
  if (player1.y < 400) {
    player1.y = player1.y + 1;
  }
  ctx.fillRect(player1.x, player1.y, 50, 200);

  ctx.fillStyle = 'yellow'; // меняем цвет клеток
  if (player2.y < 400) {
    player2.y = player2.y + 1;
  }
  ctx.fillRect(player2.x, player2.y, 50, 200);

  requestAnimationFrame(draw)
}

function texts() {
  if (timer > 0) {
    timer--
  }
}
setInterval(texts, 1000)
img.onload = draw;
