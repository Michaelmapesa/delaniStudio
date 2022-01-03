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
  $(document).ready(function(){
    $("#hover1").mouseover(function(){
      $(".hid1").show();
    });
    $("#hover1").mouseout(function(){
      $(".hid1").hide();
    });
  });
  $(document).ready(function(){
    $("#hover2").mouseover(function(){
      $(".hid2").show();
    });
    $("#hover2").mouseout(function(){
      $(".hid2").hide();
    });
  });
  $(document).ready(function(){
    $("#hover3").mouseover(function(){
      $(".hid3").show();
    });
    $("#hover3").mouseout(function(){
      $(".hid3").hide();
    });
  });
  $(document).ready(function(){
    $("#hover4").mouseover(function(){
      $(".hid4").show();
    });
    $("#hover4").mouseout(function(){
      $(".hid4").hide();
    });
  });
  $(document).ready(function(){
    $("#hover5").mouseover(function(){
      $(".hid5").show();
    });
    $("#hover5").mouseout(function(){
      $(".hid5").hide();
    });
  });
  $(document).ready(function(){
    $("#hover6").mouseover(function(){
      $(".hid6").show();
    });
    $("#hover6").mouseout(function(){
      $(".hid6").hide();
    });
  });
  $(document).ready(function(){
    $("#hover7").mouseover(function(){
      $(".hid7").show();
    });
    $("#hover7").mouseout(function(){
      $(".hid7").hide();
    });
  });
  $(document).ready(function(){
    $("#hover8").mouseover(function(){
      $(".hid8").show();
    });
    $("#hover8").mouseout(function(){
      $(".hid8").hide();
    });
  });
  $(document).ready(function(){
    $("#btn1").click(function(){
      alert($(".usr").val() + " " + "we have received your message. Thank you for reaching out to us.");
    });
    
  });


  // Subscribe a new account holder to a MailChimp list
function subscribeSomeoneToMailChimpList()
{
  var options =
  {
    "apikey": "bb18682296f48a811fe8e56f9f9e6e3f-us20",
    "id": "6c1b80ca3e.",
    "email":
    {
      "email": "me@example.com"
    },
    "send_welcome": false
  };
  var mcSubscribeRequest = UrlFetchApp.fetch("https://us4.api.mailchimp.com/2.0/lists/subscribe.json", options);
  var mcListObject = Utilities.jsonParse(mcSubscribeRequest.getContentText());
}
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color","white");
  });
  $("input").blur(function(){
    $(this).css("background-color","transparent");
  });
  
});

$(document).ready(function(){
  $(".none").focus(function(){
    $(this).css("background-color","white");
  });
  $(".none").blur(function(){
    $(this).css("background-color","transparent");
  });
  
});