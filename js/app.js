$(document).foundation()

// var element = document.getElementById('id');
// element.style.opacity = "0.9";
// element.style.filter  = 'alpha(opacity=90)';


$(document).ready(function() {
    var topOfOthDiv = $("#express").offset().top;

    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#tablet").fadeTo(1800, 0.0); //reached the desired point -- show div
         } //else {
        //   if (objectBottom < windowBottom) {
        //     if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        //   }
        // }).scroll();
    });
});

// $(window).scroll(function() {
//     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//     $(".fade").each(function() {
//       /* Check the location of each desired element */
//       var objectBottom = $(this).offset().top + $(this).outerHeight();
//
//       /* If the element is completely within bounds of the window, fade it in */
//       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//         if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//       } else { //object goes out of view (scrolling up)
//         if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//       }
//     });
//   }).scroll(); //invoke scroll-handler on page-load
// });
