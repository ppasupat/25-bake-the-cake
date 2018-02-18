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

function take(object) {
  $('#o-' + object).addClass('taken');
  $('#i-' + object).addClass('taken');
}

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

$('#o-mixer').click(function () {
  take('mixer');
});

$('#o-cupboard').click(function () {
  $(this).toggleClass('open');
  $('#o-sugar').toggleClass('reachable');
});

$('#o-sugar').click(function () {
  take('sugar');
});
  
$('#o-fridge').click(function () {
  $(this).toggleClass('open');
  $('#o-butter').toggleClass('reachable');
});

$('#o-butter').click(function () {
  take('butter');
});

// ################################
// living

$('#code1, #code2, #code3').click(function () {

});

// ################################
// hall

$('#o-B').click(function () {
  take('B');
});

$('#o-newton').click(function () {
  $(this).toggleClass('moved');
});

$('#o-C').click(function () {
  take('C');
});

$('#o-chicken').click(function () {
  if (!$(this).hasClass('eggless')) {
    $(this).addClass('eggless');
    $('#i-eggs').addClass('taken');
  }
});

// ################################
// READY!

$('#scene-preload').show();


});
