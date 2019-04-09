$(document).ready(function()  {
  // $('h1').css('color', 'white');
  $('#number5').click(function()  {
    $('#number5').css('color', 'white');
    $('#hat5').toggleClass('black grey');
  });
  $('#number4').hover(function()  {
    $('#number4').css('color', 'black');
  });
  $('#number3').click(function()  {
    $('#number3').css('color', '#ff3333');
  });
  $('#number2').click(function()  {
    $('#number2').css('font-family', 'Aerial');
  });
  $('#number1').click(function()  {
    $('#hat1').toggleClass('hat1');
    $('#number1').css('display', 'none');
  });
});
