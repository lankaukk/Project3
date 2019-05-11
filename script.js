$(document).ready(function() {
  $('head').append(`
    <style>
      .bluebox {
        background: blue;
        position: fixed;
        bottom: 0px;
        left: 0px;
        max-height: 300px;
        color: white;
        font-family: arial, sans-serif;
        padding: 15px;
        font-size: 60px;
        line-height: 70px;
        z-index:100;
        overflow: auto;
      }

      .bluebox * {
        color: white !important;
        background-color: transparent !important;
      }
    </style>
  `);

  $('p, li, h1, h2, h3, h4, h5, h6, h7, code').on('mouseenter', function(){
    var mytext = $(this).html();
    var finaltext = '<div class="bluebox">' + mytext + '</div>' ;

    $(this).css('cssText','background-color: yellow; !important; color: black !important;');

    $('body').append(finaltext);
  });

  $('p, a, li, ul, h1, h2, h3, h4, h5, h6, h7, code').on('mouseleave', function(){

    $(this).css('cssText','');

    $('.bluebox').remove();

  });
});
