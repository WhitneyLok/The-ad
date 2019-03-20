$("#question").hide();
$("#question2").hide();
$(".alert").hide();
$(".btn3").hide();
$(".scam").hide();
$(".lol").hide();
$(".window").hide();
var you="You will eat ";
var of=" of ";

 $(".math").click(function(){
    $(".alert").slideDown();
});
 
 $(".alert").mouseleave(function(){
    $(".alert").fadeOut();
    $(".math").hide();
    $(".window").fadeIn();
    $(".btn2").fadeIn();
});

 
$(".btn2").click(function(){
var message = $(".message-input").val();


    console.log(message);
    var a = parseInt(message);
            var b;
        b =a * 10;

   $(".idk").append("<div class='sender'></div><div class='sender-title'><div class='message sent'>"+a+"</div></div>");
   $("#question").show();
   $(".btn2").hide();
   $(".btn3").show();
   $(".btn3").click(function(){
    var message2 = $(".message-input").val();
    console.log(message2);
   $(".idk2").append("<div class='sender'></div><div class='sender-title'><div class='message sent'>"+message2+"</div></div>"); 
  alert(you+b+of+message2+"" + "in 10 years");
  $(".scam").show();
  $(".lol").show();
  $(".window").hide();
  $(".btn3").hide();
});
});

