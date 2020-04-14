// Hide part 2
$("#movingPart2").hide();

// Hide part 3
$("#movingPart3").hide();

// Hide part 4
$("#movingPart4").hide();

// Hide part 5


$(".next").click(function() {
  $("#movingPart1").hide();
  $("#movingPart2").show();

  $(".next1").click(function() {
    // $("#movingPart1").hide();
    $("#movingPart2").hide();
    $("#movingPart3").show();

    //back
    $(".back2").click(function() {
      $("#movingPart1").hide();
      $("#movingPart2").show();
      $("#movingPart3").hide();

    });


    $(".next2").click(function() {
      // $("#movingPart1").hide();
      // $("#movingPart2").hide();
      $("#movingPart3").hide();
      $("#movingPart4").show();

      //back
      $(".back3").click(function() {
        $("#movingPart2").hide();
        $("#movingPart3").show();
        $("#movingPart4").hide();

      });

  });

});


  $(".back1").click(function() {
    $("#movingPart1").show();
    $("#movingPart2").hide();

  });


});

// $(".next1").click(function() {
//   $("#movingPart1").hide();
//   $("#movingPart2").hide();
//   $("#movingPart3").show();
//
//   $(".back1").click(function() {
//     $("#movingPart1").hide();
//     $("#movingPart2").show();
//
//   });
// });
