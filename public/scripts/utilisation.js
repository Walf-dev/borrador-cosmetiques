$(function() {
  var step = $('.steps-navigation a');
  var stepItem = $('.steps-navigation ul li');
  var currentActiveStep = stepItem.filter('.active');
  
  moveBorderSlide();
 
  step.on('click', function(e) {
    e.preventDefault();
    var getStepId = $(this).attr('step-id');
    step.stop().parent().removeClass('active');
    $(this).stop().parent().addClass('active');
    moveBorderSlide();
    
    currentActiveStep = stepItem.filter('.active');
    
    $('.step').stop().hide().removeClass('active');
    $('.step[step-id=' + getStepId + ']').stop().show().addClass('active');
  });

  $('.btn-next').on('click', function(e) {
    e.preventDefault();
    var nextStep = currentActiveStep.next();
    console.log('next step', nextStep);
    currentActiveStep.removeClass('active');
    if(nextStep.length) {
      currentActiveStep = nextStep.addClass('active');
    } else {
      currentActiveStep = stepItem.first().addClass('active');
    }

    moveBorderSlide();
    moveStep();
  });
  
  $('.btn-pre').on('click', function(e) {
    e.preventDefault();
    var preStep = currentActiveStep.prev();
    console.log('pre step', preStep);
    currentActiveStep.removeClass('active');
    if(preStep.length) {
      currentActiveStep = preStep.addClass('active');
    } else {
      currentActiveStep = stepItem.first().addClass('active');
    }

    moveBorderSlide();
    moveStep();
  });
  
  $(window).resize(function() {
    moveBorderSlide();
  });
  
});

function moveBorderSlide() {
  activePos = $('.steps-navigation .active').position();
  $('.border-slide').stop().css({
    left: activePos.left,
    width: $('.steps .active').width()
  })
}

function moveStep() {
  var currentActiveStep = $('.steps-navigation .active a').attr('step-id');
  console.log('current step: ' + currentActiveStep);  
  
  $('.step').stop().hide().removeClass('active');

  $('.step[step-id=' + currentActiveStep + ']').stop().show().addClass('active');
}