$(function () {

// ################################
// Handle screen resizing

// TODO





// ################################
// Helper methods

function switchScene(target) {
  $('.scene').hide();
  $('#scene-' + target).show();
}

$('.nav').click(function () {
  switchScene($(this).attr('id').split('-')[2]);
});

$('.item').click(function () {
  var x = $(this);
  if (!x.hasClass('taken') || x.hasClass('used')) return;
  if (x.hasClass('selected')) {
    x.removeClass('selected');
  } else {
    $('.item').removeClass('selected');
    x.addClass('selected');
  }
});

// ################################
// Game state



// ################################
// preload

$('#o-start').click(function () {
  switchScene('kitchen');
});

// ################################
// kitchen

$('#o-cupboard').click(function () {
  $(this).toggleClass('open');
  $('#o-sugar').toggleClass('reachable');
});

$('#o-sugar').click(function () {
  $(this).addClass('taken');
  $('#i-sugar').addClass('taken');
});
  
$('#o-fridge').click(function () {
  $(this).toggleClass('open');
  $('#o-butter').toggleClass('reachable');
});

$('#o-butter').click(function () {
  $(this).addClass('taken');
  $('#i-butter').addClass('taken');
});




// ################################
// READY!

$('#scene-preload').show();


});
