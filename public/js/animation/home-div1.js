$(document).ready(function () {

    $(window).scroll(function () {
        var a = document.getElementById("div1HeaderImg2").offsetTop;
        var b = document.getElementById("astroModule2Img").offsetTop;
        var c = document.getElementById("div3img1").offsetTop;
        var d = document.getElementById("div3img2").offsetTop;
        var e = document.getElementById("div3img3").offsetTop;
        var f = document.getElementById("div3img4").offsetTop;


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
            $("#div3img1").css("opacity","1");
            $("#div3img1").css("-webkit-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img1").css("-moz-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img1").css("-o-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img1").css("animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }


        if (d >= $(window).scrollTop() && d < ($(window).scrollTop()+$(window).height())) {
            $("#div3img2").css("opacity","1");
            $("#div3img2").css("-webkit-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img2").css("-moz-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img2").css("-o-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img2").css("animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }



        if (e >= $(window).scrollTop() && e < ($(window).scrollTop()+$(window).height())) {
            $("#div3img3").css("opacity","1");
            $("#div3img3").css("-webkit-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img3").css("-moz-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img3").css("-o-animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img3").css("animation","fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

        if (f >= $(window).scrollTop() && f < ($(window).scrollTop()+$(window).height())) {
            $("#div3img4").css("opacity","1");
            $("#div3img4").css("-webkit-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img4").css("-moz-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img4").css("-o-animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
            $("#div3img4").css("animation","fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1)");
        }

    });
});
