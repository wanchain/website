$(document).ready(function () {
    $(window).scroll(function () {
        if (document.getElementById("div1HeaderImg2")) {
            var a = document.getElementById("div1HeaderImg2").offsetTop;
            var b = document.getElementById("astroModule2Img").offsetTop;
            var c = document.getElementById("div3img1").offsetTop;
            var d = document.getElementById("div3img2").offsetTop;
            var e = document.getElementById("div3img3").offsetTop;
            var f = document.getElementById("div3img4").offsetTop;

            var img1 = document.getElementById("div1o").offsetTop;

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

            // img
            if (img1 >= $(window).scrollTop() && img1 < ($(window).scrollTop()+$(window).height())) {
                // img1
                $("#div1oimg1").css("-webkit-transform","translate3d(0,0,0)");
                $("#div1oimg1").css("-moz-transform","translate3d(0,0,0)");
                $("#div1oimg1").css("transform","translate3d(0,0,0)");

                $("#div1oimg1").css("-webkit-animation","fadeRotate 1.5s linear");
                $("#div1oimg1").css("-moz-animation","fadeRotate 1.5s linear");
                $("#div1oimg1").css("animation","fadeRotate 1.5s linear");

                //img2
                $("#div1oimg2").css("-webkit-transform","translate3d(0,0,0)");
                $("#div1oimg2").css("-moz-transform","translate3d(0,0,0)");
                $("#div1oimg2").css("transform","translate3d(0,0,0)");

                $("#div1oimg2").css("-webkit-animation","fadeRotate 1.5s linear");
                $("#div1oimg2").css("-moz-animation","fadeRotate 1.5s linear");
                $("#div1oimg2").css("animation","fadeRotate 1.5s linear");

                //img3
                $("#div1oimg3").css("-webkit-transform","translate3d(0,0,0)");
                $("#div1oimg3").css("-moz-transform","translate3d(0,0,0)");
                $("#div1oimg3").css("transform","translate3d(0,0,0)");

                $("#div1oimg3").css("-webkit-animation","fadeRotate 1.5s linear");
                $("#div1oimg3").css("-moz-animation","fadeRotate 1.5s linear");
                $("#div1oimg3").css("animation","fadeRotate 1.5s linear");

                //img4
                $("#div1oimg4").css("-webkit-transform","translate3d(0,0,0)");
                $("#div1oimg4").css("-moz-transform","translate3d(0,0,0)");
                $("#div1oimg4").css("transform","translate3d(0,0,0)");

                $("#div1oimg4").css("-webkit-animation","fadeRotate 1.5s linear");
                $("#div1oimg4").css("-moz-animation","fadeRotate 1.5s linear");
                $("#div1oimg4").css("animation","fadeRotate 1.5s linear");
            }
        }
    });
});
