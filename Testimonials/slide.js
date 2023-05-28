var slideShow = document.querySelector('.slide-show');
var rightbtn = document.querySelector('.btn-right');
var leftbtn = document.querySelector('.btn-left');
var translateXValue = 0;
leftbtn.disabled=true;

rightbtn.addEventListener('click', function() {
    translateXValue -= 400; // Adjust the value as desired
    slideShow.style.transform = 'translateX(' + translateXValue + 'px)';
    if(translateXValue <= -1600) {
        rightbtn.disabled=true;
    }
    if(translateXValue < 0) {
        leftbtn.disabled=false;
    }
});

leftbtn.addEventListener('click', function() {
    translateXValue += 400; // Adjust the value as desired
    slideShow.style.transform = 'translateX(' + translateXValue + 'px)';
    if(translateXValue >= 0) {
        leftbtn.disabled=true;
    }
    if(translateXValue > -1600) {
        rightbtn.disabled=false;
    }
});
