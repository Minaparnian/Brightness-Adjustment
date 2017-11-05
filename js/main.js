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

// Use some jQuery to trigger click on canvas to input
    $('#canvas').on('click', function() {
        $('#imgfile').trigger('click');
        //show the slider after click to choose the image
        $('#slider').show();
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



    var slider = $('#slider').change(function(){
        // console.log(this.value);
        var canvas = $('#canvas')[0];
        var val = parseInt($( this ).val()) - 50;
        // console.log(this.value);
        if (val > 50 || val < -50)
        return false;

        canvas.style.backgroundColor = val > 50 ? 'white' : 'black';
        canvas.style.opacity = Math.abs(val/100) *  2;

    })
});
