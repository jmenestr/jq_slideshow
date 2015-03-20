/**
 * Created by Steven on 3/19/2015.
 */
$(document).ready(function() {
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    var $sliderDiv = $("#slider");
    var $slideUl = $("#slider .slides");
    var $slides = $("#slider .slides .slide")

    var interval;

    function StartSlider() {
        interval = setInterval(function() {
            $slideUl.animate({"margin-left":"-="+width},animationSpeed,function() {
                if(++currentSlide === $slides.length+1) {
                    currentSlide=1;
                    $slideUl.css("margin-left",0);
                }
            });
        },pause);
    }

    StartSlider();
});