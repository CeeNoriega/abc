$(document).foundation()

// Animation for Images //
$(document).ready(function() {
    var siteTotalDiv = $("#sitetotal").offset().top;
    var recurringDiv = $("#recurring").offset().top;
    $(window).scroll(function() {
      if($(window).width() < 640) {
        if($(window).scrollTop() > siteTotalDiv) {
          $("#small-no-contracts").animate({opacity: 1}, 1800);
        }
      }
      else {
        if($(window).scrollTop() > siteTotalDiv) {
          $("#no-contracts").animate({opacity: 1}, 1800);
        }
      }
    });
    $(window).scroll(function() {
        if($(window).scrollTop() > recurringDiv) {
          $("#tablet").animate({opacity: 1}, 1800);
        }
    });
});

// Google Analytics //
$('#learn-more').click(function(e) {
  var label = $(this).attr('id');
  var action = $(this).attr('data-ga-label');
  // ga('send', 'event', 'Click', action, label);
});

$('#set-up-today').click(function(e) {
  var label = $(this).attr('id');
  var action = $(this).attr('data-ga-label');
  // ga('send', 'event', 'Click', action, label);
});

$('#sign-up-today').click(function(e) {
  var label = $(this).attr('id');
  var action = $(this).attr('data-ga-label');
  // ga('send', 'event', 'Click', action, label);
});


// function scrollAnalyticsHandler(direction, label) {
//   if (direction === 'down') {
//       ga('send', 'event', 'Section', 'Hit scrolling downwards', label, 1);
//   } else {
//     ga('send', 'event', 'Section', 'Hit scrolling upwards', label, 1);
//   }
// }
//
// var sectionWaypoints = $("section").not("#cover").waypoint({
//   handler: function(direction) {
//       var label = this.element.id;
//       scrollAnalyticsHandler(direction, label);
//   }
});
