$(document).foundation()

$(document).ready(function() {
    var topOfthePage = $("#sitetotal").offset().top;
    var topOftheDiv = $("#recurring").offset().top;
    $(window).scroll(function() {
      if($(window).width() < 640) {
        if($(window).scrollTop() > topOfthePage) {
          $("#small-no-contracts").animate({opacity: 1}, 1800);
        }
      }
      else{
        if($(window).scrollTop() > topOfthePage) {
          $("#no-contracts").animate({opacity: 1}, 1800);
        }
      }
    });
    $(window).scroll(function() {
        if($(window).scrollTop() > topOftheDiv) {
          $("#tablet").animate({opacity: 1}, 1800);
        }
    });
});
