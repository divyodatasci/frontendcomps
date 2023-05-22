var slideShow = document.querySelector('.slide-show');
var decreasebtn = document.querySelector('.btn-decrease');
var increasebtn = document.querySelector('.btn-increase');
var translateXValue = 0;

decreasebtn.addEventListener('click', function() {
    translateXValue -= 400; // Adjust the value as desired
    slideShow.style.transform = 'translateX(' + translateXValue + 'px)';
    if(translateXValue <= -2000) {
        decreasebtn.disabled=true;
    }
    if(translateXValue < 0) {
        increasebtn.disabled=false;
    }
});

increasebtn.addEventListener('click', function() {
    translateXValue += 400; // Adjust the value as desired
    slideShow.style.transform = 'translateX(' + translateXValue + 'px)';
    if(translateXValue >= 0) {
        increasebtn.disabled=true;
    }
    if(translateXValue > -2000) {
        decreasebtn.disabled=false;
    }
});
