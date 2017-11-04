// Dispatch a change event to file input element.
$(document).ready(function() {
    $('#imgfile').change(function(e) {
        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;
// Get the uploaded file from the event handler and get a data URL by using the FileReader object.
        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);
    });
// Make an img element with the data URL and draw it on the canvas.
    function fileOnload(e) {
      //Like this in javascript make an image
     // img = new Image();
     //img.onload = imageLoaded;
        var $img = $('<img>', { src: e.target.result });
        $img.load(function() {
            var canvas = $('#canvas')[0];
            var context = canvas.getContext('2d');
            context.drawImage(this, 0, 0, canvas.width, canvas.height );
        });
    }
});
