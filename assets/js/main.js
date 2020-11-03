$(document).ready(function () {
  // Slick Slider Init
  $("#services-slider").slick({
    // autoplay: true,
    // autoplaySpeed: 1000,
    slidesToShow: 4,
    loop: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="assets/img/slider-btn/prev-btn.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="assets/img/slider-btn/next-btn.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Mobile Toggle Menu

  if ($(".mobile-toggle-btn")) {
    $(".mobile-toggle-btn").click(function () {
      $(".nav-links").toggleClass("show");
      $(".call-container").toggleClass("show");
    });
  }
});
