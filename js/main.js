$(function(){
  $(document.getElementById("page-top")).click(function(){
    let speed = 500;
    let href= $('a[href^="#"]').attr("href");
    let target = $(href === "#" || href === "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
  });
});