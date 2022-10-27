
// Hide & Show buttons
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });


//Css Remover
$(document).ready(function() {
  $("#buttonid").click(function() {
      $("*").removeClass();
      $("*").removeAttr("style");
      $("style").remove();
    });
});


//Mouse enter
$(document).ready(function(){
    $("#para1").mouseenter(function(){
      alert("You entered a paragragh!");
    });
  });


//Mouse leave
$(document).ready(function(){
    $("#para2").mouseleave(function(){
      alert("Bye!");
    });
  });


//Single click
$(document).ready(function(){
  $(".para1").click(function(){
      $(this).hide();
  });
});


//Double click
$(document).ready(function(){
  $(".para2").dblclick(function(){
      $(this).hide();
  });
});


//Toggle
$(document).ready(function(){
  $("button").click(function(){
    $(".tag").toggle();
  });
});
 

//Fade in-out Effect
$(document).ready(function(){
  $(".btn1").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
});


//Animation
$(document).ready(function(){
  $(".btn2").click(function(){
    $(".box").animate({
      height: 'toggle'
    });
  });
});


//callback after click
$(document).ready(function(){
  $(".after").click(function(){
    $(".afterclick").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});



//callback before click
$(document).ready(function(){
  $(".before").click(function(){
    $(".beforeclick").hide(1000);
    alert("The paragraph is now hidden");
  });
});


