function loadImage(){
  var input, file, fr, img;

  img = input.files[0];
  fr = new FileReader();
  fr.onload = createImage;
  fr.readAsDataURL(file);
}








// function called draw(), which is executed once the page finishes loading
var image = new Image();
image.src = "img/pleasure-garden.jpg";
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

  }
}
