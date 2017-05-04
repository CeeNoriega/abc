$(document).foundation()

$(document).ready(function() {
    var topOfOthDiv = $("#express-section").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
          $("#tablet").animate({opacity: 1}, 1800);
        }
    });
});
