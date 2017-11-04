function loadImage() {
       var input, file, fr, img;

       if (typeof window.FileReader !== 'function') {
           write("The file API isn't supported on this browser yet.");
           return;
       }

       input = document.getElementById('imgfile');
       if (!input) {
           write("Um, couldn't find the imgfile element.");
       }
       else if (!input.files) {
           write("This browser doesn't seem to support the `files` property of file inputs.");
       }
       else if (!input.files[0]) {
           write("Please select a file before clicking 'Load'");
       }
       else {
           file = input.files[0];
           fr = new FileReader();
           fr.onload = createImage;
           fr.readAsDataURL(file);
       }

       function createImage() {
           img = new Image();
           img.onload = imageLoaded;
           img.src = fr.result;
       }

       function imageLoaded() {
           var canvas = document.getElementById("canvas")
           var ctx = canvas.getContext("2d");
           ctx.drawImage(img,0,0, canvas.width, canvas.height);
           alert(canvas.toDataURL("image/png"));
       }

       function write(msg) {
           var p = document.createElement('p');
           p.innerHTML = msg;
           document.body.appendChild(p);
       }
   }










// function called draw(), which is executed once the page finishes loading
// var image = new Image();
// image.src = "img/pleasure-garden.jpg";
// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
//
//   }
// }
