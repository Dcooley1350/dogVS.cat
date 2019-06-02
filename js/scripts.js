$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dogBark").prepend("<li>BARK!</li>");
    $("ul#catHiss").prepend("<li>HISSSSS!</li>");
  });
  $("button#goodBoy").click(function() {
    $("ul#CatIsGone").append("<li><img src='img/goodboy.jfif' alt='A very good boy'></li>")
  })
  $("<li><img src='img/goodboy.jfif' alt='A very good boy'></li>").click(function() {
    $(this).remove();
  })
})