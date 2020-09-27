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
});
