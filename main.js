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

$('.nav').click(function (event) {
  switchScene($(this).attr('id').split('-')[2]);
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
  




// ################################
// READY!

$('#scene-preload').show();


});
