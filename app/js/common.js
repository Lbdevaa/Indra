$(function () {
  // программа курса - модули
  $(".events__more-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".event:nth-of-type(n+4)").toggleClass("active");
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      2000
    );
  });

  // faq accordion
  let questions = document.querySelectorAll(".questions__box");
  let i;

  for (i = 0; i < questions.length; i++) {
    questions[i].children[0].addEventListener("click", function (questions) {
      this.parentElement.classList.toggle("active");
    });
  }
  // teacher slider
  var swiperProduct = new Swiper(".slider-teacher", {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 2,
    pagination: {
      el: ".slider-teacher__pag",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".slider-teacher__next",
      prevEl: ".slider-teacher__prev",
    },
    breakpoints: {
      // when window width is >= 980px
      980: {
        slidesPerView: 4,
        width: 1125,
      },
    },
  });

  // popup
  $(".open-popup").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  //teachers page sort
  $(".teachers-page__sort-btn").click(function (e) {
    e.preventDefault();
    $(".teachers-page__list").removeClass("active");
    $(".teachers-page__sort-btn").removeClass("active");
    $(this).addClass("active");
  });
  $(".teachers-page__sort-btn--school").click(function () {
    $(".teachers-page__list--school").addClass("active");
  });
  $(".teachers-page__sort-btn--kindergarten").click(function () {
    $(".teachers-page__list--kindergarten").addClass("active");
  });

  //burger
  $(".burger-menu").click(function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  // footer
  $(".footer__more-btn").click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(".footer__links:nth-of-type(n+2)").addClass("active");
  });

  // eye version
  $(".eye").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("body").toggleClass("big-eye");
  });

  //галерея фото 
  $().fancybox({
    selector: '[data-fancybox="popin-img"]',
    thumbs: false,
    hash: false,
    infobar: false,
  });

  $('.gallery-slider__carousel').slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //gallery
  $('.video-carousel').owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    margin: 20,
    video: true,
    // lazyLoad:true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    responsive: {
      480: {
        items: 2
      },
      600: {
        items: 4
      }
    }
  });

  //banner link
  $('.banner__social-link').click(function () {
    $(this).toggleClass("active");
  });

});
