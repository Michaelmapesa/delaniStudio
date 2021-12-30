$(document).ready(function(){
    $("#colm1").click(function(){
      $(".port1").toggle();
    });
  });
  $(document).ready(function(){
    $("#colm2").click(function(){
      $(".port2").toggle();
    });
  });
  $(document).ready(function(){
    $("#colm3").click(function(){
      $(".port3").toggle();
    });
  });
  $("#hover1").hover(function(){
    $(this).css("background-color", "#FFFFFF");
    }, function(){
    $(this).css("background-color", "#none");
  });