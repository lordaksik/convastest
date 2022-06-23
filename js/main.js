
var canvas = document.getElementById('games');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  canvas.width = 1500
  canvas.height = 720
}
var img = new Image();
img.src = 'img/1700.jpg'
var timer = 100;
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
  ctx.
  ctx.arc(750, 40, 98, 0, Math.PI, false)
  ctx.lineTo(652, 0)
  ctx.lineTo(848, 0)
  ctx.lineTo(848, 40)
  ctx.stroke();
  ctx.font = '50px serif';
  ctx.fillStyle = 'black'
  ctx.fillText(timer, 720, 80);
  timer--
  if (timer > 0) {
    setTimeout((draw), 1000)

  }
}

img.onload = draw;


