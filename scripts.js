$('#random-button').on('click', function(){
  changeBackgroundColor();
  removeButtonOutline();
});

$('#reset-button').on('click', function(){
  resetBackgroundColor();
  removeButtonOutline();
});

function changeBackgroundColor() {
  $('#background').css('backgroundColor', getRandomColor());
}

function getRandomColor(){
  var colors = ['#800000','#FF0000','#800080','#FF00FF','#008000','#00FF00','#808000','#FFFF00','#000080','#0000FF','#008080','#00FFFF']

  var newColor = colors[Math.floor(Math.random() * colors.length)];

  return newColor;
}

function removeButtonOutline() {
  $('#random-button').css('outline', 'none');
  $('#reset-button').css('outline', 'none');
}

function resetBackgroundColor() {
  $(document).ready(function() {
    $('#background').css('backgroundColor', 'white');
  });
}
