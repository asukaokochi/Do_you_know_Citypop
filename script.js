$(document).ready(function(){

    $('.musics').bxSlider({
        mode:'vertical',
        touchEnabled: true,
        controls: true,
        infiniteLoop: true,
        nextSelector: "#nextbtn",
        prevSelector: "#prevbtn"
    });
    var $svg = $('svg').drawsvg({
      duration: 200,
      easing: 'linear'
    });
    $svg.drawsvg('animate');
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});