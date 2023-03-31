$(document).ready(function () {
  $(window).scroll(function () {
    /* Скроллировать фоновые слои с разной скоростью */
    let winTop = $(window).scrollTop();
    $(".parallax").css(
      "background-position",
      "120px " + (700 - winTop * 5) + "px," + (600 - winTop * 3.5) + "px,"  +
        (500 - winTop * 2) +
        "px," +
        "center " +
        (-90 - winTop * 0.5) +
        "px"
    );
  });
});
