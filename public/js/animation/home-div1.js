$(document).ready(function () {
    $(window).scroll(function () {
        var a = document.getElementById("div1HeaderImg2").offsetTop;
        var b = document.getElementById("astroModule2Img").offsetTop;
        var c = document.getElementById("officalModule4").offsetTop;
        var d = document.getElementById("officalModule3Img").offsetTop;
        var e = document.getElementById("officalModule5").offsetTop;
        var f = document.getElementById("officalModule6").offsetTop;

        if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())) {
            $(".div1HeaderImg2").css("opacity","1");
            $(".div1HeaderImg2").css("-webkit-animation","fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $(".div1HeaderImg2").css("-moz-animation","fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $(".div1HeaderImg2").css("-o-animation","fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $(".div1HeaderImg2").css("animation","fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

        if (b >= $(window).scrollTop() && b < ($(window).scrollTop()+$(window).height())) {
            $(".astroModule2Img").css("opacity","1");
            $(".astroModule2Img").css("-webkit-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $(".astroModule2Img").css("-moz-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $(".astroModule2Img").css("-o-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $(".astroModule2Img").css("animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

        if (c >= $(window).scrollTop() && c < ($(window).scrollTop()+$(window).height())) {
            $("#officalModule4").css("opacity","1");
            $("#officalModule4").css("-webkit-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule4").css("-moz-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule4").css("-o-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule4").css("animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

        if (d >= $(window).scrollTop() && d < ($(window).scrollTop()+$(window).height())) {
            $("#officalModule3Img").css("opacity","1");
            $("#officalModule3Img").css("-webkit-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule3Img").css("-moz-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule3Img").css("-o-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule3Img").css("animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

        if (e >= $(window).scrollTop() && e < ($(window).scrollTop()+$(window).height())) {
            $("#officalModule5").css("opacity","1");
            $("#officalModule5").css("-webkit-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule5").css("-moz-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule5").css("-o-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule5").css("animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

        if (f >= $(window).scrollTop() && f < ($(window).scrollTop()+$(window).height())) {
            $("#officalModule6").css("opacity","1");
            $("#officalModule6").css("-webkit-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule6").css("-moz-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule6").css("-o-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#officalModule6").css("animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

    });
});
