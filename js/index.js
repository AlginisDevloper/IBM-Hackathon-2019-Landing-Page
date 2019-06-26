$(document).ready(function() {
  /*
    Ensure Top Scroll upon refresh
    $(this).scrollTop(0);
    */

  function placeNavBarOnJumbo() {
    let navPos = $(".jumbotron").outerHeight() - $(".navbar").outerHeight();
    $(".navbar").css({
      position: "absolute",
      top: `${navPos}px`,
      "z-index": "1",
      right: "0px",
      left: "0px"
    });
    $(".nav-link").css("color", "#000");
    $("#lang").css("color", "royalblue");
    $(".navbar").removeClass("solid");
    $(".navbar").addClass("solid-alt");
  }

  function bodyNavigation() {
    $(".navbar").css({
      position: "sticky",
      top: "0px",
      "z-index": "0"
    });
    $(".nav-link").css("color", "#f0f2f3");
    $("#lang").css("color", "royalblue");
    $(".navbar").removeClass("solid-alt");
    $(".navbar").addClass("solid");
  }

  // Initial Check if the user is at the top of the window, if true place navBar on Jumbo
  if ($(window).scrollTop() === 0) {
    placeNavBarOnJumbo();
  }

  $(window).scroll(function() {
    // Checks if a window is scrolled past the jumbtron, if true color navBar solid
    if ($(this).scrollTop() > $(".jumbotron").outerHeight() - 25) {
      bodyNavigation();
    } else {
      placeNavBarOnJumbo();
    }
  });
});
