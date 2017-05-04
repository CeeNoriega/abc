$(document).foundation()

$(document).ready(function() {
    var topOfOthDiv = $("#express").offset().top;

    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#tablet").fadeTo(1800, 0.0); //reached the desired point -- show div
         }
    });
});
