var animationSpeed = 300;
var responsiveWidth = 1070-17;
$("#active").append("<div id=\"nav-icon\"><span></span><span></span><span></span><span></span></div>");

$(document).ready(function(){
    if($(window).width()>= responsiveWidth){
        $("a.nav-item").show();
    }else{
        $("a.nav-item").hide();
        $("a#active").show();
    }

    $(window).on({
        load:function(){
            if($(window).width()>= responsiveWidth){
                $("a.nav-item").show();
            }else{
                $("a.nav-item").hide();
                $("a#active").show();
            }
        },
        resize:function(){
            if($(window).width()>= responsiveWidth){
                $("a.nav-item").show();
            }else{
                $("a.nav-item").hide();
                $("a#active").show();
            }
        }
    });

    $("nav").on({
        mouseenter:function(){
            if($(window).width()>= responsiveWidth){
                $("#nav-icon").removeClass("open");
                $("a.nav-item").show();
            }else{
                $("#nav-icon").addClass("open");
                $("a.nav-item").show(animationSpeed);
            }
        },
        mouseleave:function(){
            if($(window).width()>= responsiveWidth){
                $("#nav-icon").removeClass("open");
                $("a.nav-item").show();
            }else{
                $("#nav-icon").removeClass("open");
                $("a.nav-item").hide();
                $("a#active").show();
            }
        }
    });

    $("#nav-icon").on("click",function(){
        $("#nav-icon").toggleClass("open");
        if($("#nav-icon").hasClass("open")){
            $("a.nav-item").show(animationSpeed);
        }else{
            $("a.nav-item").hide();
        }
        $("a.nav-item#active").show();
    });
});
