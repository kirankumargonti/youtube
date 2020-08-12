//Initializing
var i = 0;
var images = [];
var time = 3000; // time in millie seconds

//images

images[0] = './Images/1.jpg';
images[1] = './Images/2.jpg';
images[2] = './Images/4.jpg';
images[3] = './Images/3.jpg';

//function

function changeImage() {
    document.slideShow.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;