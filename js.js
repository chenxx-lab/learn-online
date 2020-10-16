// JavaScript Document

$('ul').hover(function() {
    $(this).addClass("top_nav").siblings().removeClass("top_nav");
    $(this).find('li').stop().slideDown(300);
    $(this).css("background", "red").siblings().css("background", "black");
}, function() {
    $(this).find('li').stop().slideUp(300);
});
$('li').mouseover(function() {
    $(this).css({
        "background": "#fe8761",
        "color": "black",
        "font-size": "18px"
    });
}).mouseout(function() {
    $(this).css({
        "background": "#5f6caf",
        "color": "white",
        "font-size": "15px"
    });
});
