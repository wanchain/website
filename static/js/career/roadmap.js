$(document).ready(function () {
  $("#clickDiv").click(function (e) {
    e.stopPropagation();
    $("#showDiv").slideToggle();
  });
  $("#clickDiv2").click(function (e) {
    e.stopPropagation();

    $("#showDiv2").slideToggle();
  });
  $("#clickDiv3").click(function (e) {
    e.stopPropagation();

    $("#showDiv3").slideToggle();
  });
});
