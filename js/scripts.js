$(document).ready(function() {
  $("#score").submit(function(event) {
    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();
    var answer5 = $("input:radio[name=q5]:checked").val();
    var totalScore = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) + parseInt(answer5);

    if (typeof($("input:radio[name=q1]:checked").val()) === "undefined") {
      alert("Please answer question 1");
    } else if (typeof($("input:radio[name=q2]:checked").val()) === "undefined") {
      alert("Please answer question 2");
    } else if (typeof($("input:radio[name=q3]:checked").val()) === "undefined") {
      alert("Please answer question 3");
    } else if (typeof($("input:radio[name=q4]:checked").val()) === "undefined") {
      alert("Please answer question 4");
    } else if (typeof($("input:radio[name=q5]:checked").val()) === "undefined") {
      alert("Please answer question 5");
    } else {
      alert("Your total score is: " + totalScore);
    }


    event.preventDefault();
  });

  $("#startBtn").click(function() {

    if (typeof($('input#firstName').val()) === "undefined" || typeof($('input#lastName').val()) === "undefined") {
      alert("Please fill in your name");
    } else {
      $("#quiz").show();
    }
  });

});
