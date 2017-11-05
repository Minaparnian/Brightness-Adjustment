# Brightness Adjustment in an HTML5 Canvas

Using HTML5 Canvas API and File API to allowing the user to adjust the brightness of the image in real time by dragging the slider back and forth.

## Introduction

One of the more exciting features of <canvas> is the ability to use images.  These can be used to do dynamic photo compositing or as backdrops of graphs, for sprites in games, and so forth. External images can be used in any format supported by the browser, such as PNG, GIF, or JPEG. You can even use the image produced by other canvas elements on the same page as the source!


## Installing

Added in HTML5, the HTML <canvas> element with id of canvas to draw image via scripting in JavaScript.


### HTML

```
<canvas id="canvas" width="600" height="384"></canvas>


```

Make an img element with the data URL and draw it on the canvas.

### Javascript(jQuery)


```  
function fileOnload(e) {
      var img = $('<img>', { src: e.target.result });
      img.load(function() {
          var canvas = $('#canvas')[0];
          var context = canvas.getContext('2d');
          context.drawImage(this, 0, 0, canvas.width, canvas.height );
      });
  }
```

Add <input> elements with type="file" which let user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission, or manipulated using JavaScript code and the [File API.](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications).


### HTML


```
<input type='file' id='imgfile'/>

```




Add `style="display: none;"` to disable the input and use Javascript to trigger to the canvas to choose the file.
Also show the slider after click to choose the image.

### HTML

```
<input type='file' id='imgfile' style="display: none;"/>

```

```
<input id="slider" type="range" min="-40" max="40" step="0.2" value="0" style="display: none;" >

```
### Javascript(jQuery)

```

    $('#brightness').on('click', function() {
        $('#imgfile').trigger('click');
        //show the slider after click to choose the image
        $('#slider').show();
    });

```

We add an event listener to the input to listen for changes to its selected value changes (in this case, when files are selected).

The readAsDataURL method is used to read the contents of the specified Blob or File. When the read operation is finished, the readyState becomes DONE.


### Javascript(jQuery)



```
    $('#imgfile').change(function(e) {
        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;
        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);

```

Add <input> elements of type "range" with the id of slider which let user specify a numeric value which must be no less than a given value, and no more than another given value.

### HTML



```
<input id="slider" type="range" min="-40" max="40" step="0.2" value="0" >
```

Duplicated canvas with same features but set the z-index to 1 to be on the top and set the brightness variable on that.

### HTML



```
<canvas id="brightness" width="600" height="384"></canvas>

```


### Javascript(jQuery)

```

var slider = $('#slider').change(function(){
    var brightness = $('#brightness')[0];
    var val = parseInt($( this ).val());
    if (val > 40 || val < -40)
    return false;

    brightness.style.backgroundColor = val > 0 ? 'white' : 'black';
    brightness.style.opacity = Math.abs(val/100) * 2;

})
});


```


## Online Version
An online version of the app can be accessed using this  [Link  :link:](https://minaparnian.github.io/Brightness-Adjustment/)


## Build With

- HTML5/ Canvas API
- CSS
- Javascript/jQuery
- File API
