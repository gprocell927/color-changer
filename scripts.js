// The random background color cannot be white.
// The default and reset background color must be white.
function getRandomColor(){
  var colors = ['red','orange','yellow','green','blue','violet','magenta','black','brown'];
  var newColor = colors[Math.floor(Math.random() * colors.length)];

  return newColor;
}

function changeBackgroundColor() {
  $('#background').css('backgroundColor', getRandomColor());
}

$('#random-button').on('click', function(){
  changeBackgroundColor();
})
