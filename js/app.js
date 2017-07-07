$(document).foundation()

$(document).ready(function() {
    var topOftheDiv = $("#recurring").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOftheDiv) {
          $("#tablet").animate({opacity: 1}, 1800);
        }
    });
});
