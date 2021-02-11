$('.show-work-btn').on('click', function(e) {
  var work_connector = $(this).attr('for-work');
  $('.float-works-wrap[work-number=' + work_connector + ']').toggleClass("activate-works-paper");
  /*$('body').toggleClass("noscroll", 0);*/
  e.preventDefault();
});

$('.float-works-close').on('click', function(e) {
  $('.float-works-wrap').removeClass("activate-works-paper");
  /*$('body').removeClass("noscroll", 0);*/
  e.preventDefault();
});

$(document).ready(function() {
  $(".float-wrap").slimScroll({
    width: "100%",
    height: "100vh",
    distance: "100px",
    railVisible: false,
    wheelStep: 10,
    touchScrollStep: 45
  });
});
/* http://rocha.la/jQuery-slimScroll */

var ar = new Array(33, 34, 35, 36, 37, 38, 39, 40);
$(document).keydown(function(e) {
  if ($('.float-wrap').hasClass('activate-works-paper')) {
    var key = e.which;
    //console.log(key);
    //if(key==35 || key == 36 || key == 37 || key == 39)
    if ($.inArray(key, ar) > -1) {
      e.preventDefault();
      return false;
    }
    return true;
  }
});