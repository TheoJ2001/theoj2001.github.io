var slideAnimation;
var thisSlide = 1;
var slideStep = 600;
var slideSpeed = 1000;
var pause = 3000;
var responsiveWidth = 1070-17;
$(".slide-img").first().clone().appendTo(".slides");

$(function(){
    var $slideshow = $("#slideshow");
    var $slideContainer = $slideshow.find("#slide-container");
    var $slides = $slideContainer.find(".slides");
    var $slideImg = $slides.find(".slide-img");

    function startSlider(){
        slideAnimation = setInterval(function(){
            $slides.animate({'margin-top': '-='+slideStep}, slideSpeed, function(){
                thisSlide++;
                if(thisSlide === $slideImg.length){
                    thisSlide = 1;
                    $slides.css({'margin-top' : "0px"});
                }
            });
        }, pause);
    }
    function stopSlider(){
        clearInterval(slideAnimation);
    }
    $slideContainer.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    startSlider();
});