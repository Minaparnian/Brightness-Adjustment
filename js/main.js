// function called draw(), which is executed once the page finishes loading
var image = new Image();
image.src = "pleasure-garden.jpg";
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

  }
}
