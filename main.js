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

var codes = { code1: 0, code2: 0, code3: 0 };
// Debug
var codes = { code1: 5, code2: 9, code3: 7 };

$('#code1, #code2, #code3').click(function () {
  var x = $(this), id = $(x).attr('id'), value = (codes[id] + 1) % 10;
  codes[id] = value;
  x.css('background-position', '-' + (value * 60) + 'px 0');
  if (codes.code1 == 5 && codes.code2 == 9 && codes.code3 == 8) {
    $('#o-drawer').addClass('open');
    $('#o-seed, #o-F').addClass('reachable');
  }
});

$('#o-F').click(function () {
  take('F');
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
