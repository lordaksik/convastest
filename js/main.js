
var canvas = document.getElementById('games');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  canvas.width = 1500
  canvas.height = 720
}
fonHealths()


function fonHealths() {
  var img = new Image();
  img.src = 'img/1700.jpg'
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'OrangeRed';
    ctx.strokeRect(100, 40, 550, 50)
    ctx.fillStyle = 'LawnGreen'; // меняем цвет клеток
    ctx.fillRect(100, 40, 550, 50);

    ctx.strokeStyle = 'OrangeRed';
    ctx.strokeRect(850, 40, 550, 50)
    ctx.fillStyle = 'LawnGreen'; // меняем цвет клеток
    ctx.fillRect(850, 40, 550, 50);
  };
}


