//Learning how to do this from https://coolcssanimation.com/element-fade-out-on-scroll/

var section = document.getElementById('skills');

function fadeOutOnScroll(element){
    console.log(element)
        if (!element){
            return;
        }
    var distanceToTop=window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    var opacity = 1;
    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    if (opacity >=0){
        element.style.opacity = opacity;
    }
    console.log(opacity)
}
function scrollHandler(){
    fadeOutOnScroll(section);

}
window.addEventListener('scroll', scrollHandler);
