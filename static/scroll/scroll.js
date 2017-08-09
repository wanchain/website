$(function(){
    var scrtime;
    $("#quotation").hover(function(){
        clearInterval(scrtime);

    },function(){

        scrtime = setInterval(function(){
            var $ul = $("#quotation ul");
            var liHeight = $ul.find("li:last").height();
            $ul.animate({marginTop : liHeight + 35 + "px"},500,function(){

                $ul.find("li:last").prependTo($ul);
                $ul.find("li:first").hide();
                $ul.css({marginTop:0});
                $ul.find("li:first").fadeIn(500);
            });
        },4000);

    }).trigger("mouseleave");
});
