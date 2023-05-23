/* 

  $("p").click(function() {
    var fontSize = parseInt($(this).css("font-size"));
    fontSize = fontSize + 1 + "px";
    $('p').css({'font-size': fontSize});
  });
  
  $("#buttonPlus").click(function() {
    var fontSize = parseInt($("p").css("font-size"));
    fontSize = fontSize + 5 + "px";
    $('p').css({'font-size': fontSize});
  });
  
  $("#buttonMinus").click(function() {
    var fontSize = parseInt($("p").css("font-size"));
    if (fontSize <= 20)
      return
    fontSize = fontSize - 5 + "px";
    $('p').css({'font-size': fontSize});
  });



    */

/* export const changeTextSize = (type: string) =>

  $(document).ready(function () {
    $(".increaseFont,.decreaseFont").click(function () {
      var type = $(this).val();
      var curFontSize = $('.data').css('font-size');
      if (type == 'increase') {
        $('.data').css('font-size', parseInt(curFontSize) + 1);
      } else {
        $('.data').css('font-size', parseInt(curFontSize) - 1);
      }
      // alert($('.data').css('font-size'));
    });
  }); */


/* Tentativa 02 */


$(document).ready(function () {
  let fonte = 1
  $('#aumentar').click(function () {
    if (fonte < 10) {
      fonte++
      $('home').css({ 'font-size': fonte + 'rem' })
    }
  })

  $('#diminuir').click(function () {
    if (fonte > 0) {
      fonte--
      $('home').css({ 'font-size': fonte + 'rem' })
    }
  })
})
