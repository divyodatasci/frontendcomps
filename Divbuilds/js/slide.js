var slideShow = document.querySelector('.slide-show');
var rightbtn = document.querySelector('.btn-right');
var leftbtn = document.querySelector('.btn-left');
var translateXValue = 0;
leftbtn.disabled=true;
leftbtn.classList.add('disabled');


rightbtn.addEventListener('click', function() {
    translateXValue -= 400; // Adjust the value as desired
    slideShow.style.transform = 'translateX(' + translateXValue + 'px)';
    if(translateXValue <= -1600) {
        rightbtn.disabled=true;
        rightbtn.classList.add('disabled');
    }
    if(translateXValue < 0) {
        leftbtn.disabled=false;
        leftbtn.classList.remove('disabled');
    }
});

leftbtn.addEventListener('click', function() {
    translateXValue += 400; // Adjust the value as desired
    slideShow.style.transform = 'translateX(' + translateXValue + 'px)';
    if(translateXValue >= 0) {
        leftbtn.disabled=true;
        leftbtn.classList.add('disabled');
    }
    if(translateXValue > -1600) {
        rightbtn.disabled=false;
        rightbtn.classList.remove('disabled');
    }
});
