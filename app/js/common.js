$(function () {
  // программа курса - модули
  $(".events__more-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".event:nth-of-type(n+4)").toggleClass("active");
  });
  // faq accordion
  let questions = document.querySelectorAll(".questions__box");
  let i;

  for (i = 0; i < questions.length; i++) {
    questions[i].onclick = function (questions) {
      this.classList.toggle("active");
    };
  }
  // teacher slider
  var swiperProduct = new Swiper(".slider-teacher", {
    // slidesOffsetAfter: 20,
    spaceBetween: 20,
    // width: 1000,
    // slidesPerView: "auto",
    slidesPerView: 4,
    pagination: {
      el: ".slider-teacher__pag",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".slider-teacher__next",
      prevEl: ".slider-teacher__prev",
    },
    // breakpoints: {
    //   // when window width is >= 480px
    //   980: {
    //     spaceBetween: 30,
    //     slidesOffsetBefore: 30,
    //     width: 1125,
    //   },
    // },
  });

  // popup
  $(".open-popup").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  // fancy product open img
  // $(".single-news__img-box").fancybox();

  // $(".single-news__slider-big").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   asNavFor: $(".single-news__slider-nav"),
  //   centerMode: true,
  //   dots: false,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         dots: true,
  //         // appendDots: $(".single-news__slider-big-pagination"),
  //       },
  //     },
  //   ],
  // });
  // нижняя часть - мини фото
  // $(".single-news__slider-nav").slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   asNavFor: $(".single-news__slider-big"),
  //   dots: false,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: "unslick",
  //     },
  //   ],
  // });

  // $(window).on('resize orientationChange', function (event) {
  //   $('.single-news__card-slider-big').slick('refresh')
  //   $('.single-news__card-slider-nav').slick('refresh')
  // })
});
