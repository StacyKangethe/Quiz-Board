$(document).ready(function() {
  $("#output button").submit(function(event) {
    var Question1 = $("input:radio[name=Question1]:checked").val();
    event.preventDefault();
  });
});
