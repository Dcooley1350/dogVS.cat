$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dogBark").prepend("<li>BARK!</li>");
    $("ul#catHiss").prepend("<li>HISSSSS!</li>");
  }); 
})