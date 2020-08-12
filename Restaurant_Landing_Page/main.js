//Initializing
var i = 0;
var images = [];
var time = 2000; // time in millie seconds

//images

images[0] = "url(./Images/3.jpg)";
images[1] = "url(./Images/2.jpg)";
images[2] = "url(./Images/1.jpg)";
//function

function changeImage() {
    var el = document.getElementById('body');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;