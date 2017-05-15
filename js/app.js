$(document).foundation()

$(document).ready(function() {
    var topOfOthDiv = $("#recurring").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
          $("#tablet").animate({opacity: 1}, 1800);
        }
    });
});
