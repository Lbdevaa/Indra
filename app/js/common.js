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
    // slidesOffsetAfter: 20,
    spaceBetween: 20,
    loop: true,
    // width: 1000,
    // slidesPerView: "auto",
    // slidesOffsetBefore: -20,
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
        // spaceBetween: 30,
        // slidesOffsetBefore: 70,
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

  //news page sort
  // $(".news__sort-btn").click(function (e) {
  //   e.preventDefault();
  //   $(".news__wrap").removeClass("active");
  //   $(".news__sort-btn").removeClass("active");
  //   $(this).addClass("active");
  // });
  // $(".news__sort-btn--school").click(function () {
  //   $(".news__wrap--school").addClass("active");
  // });
  // $(".news__sort-btn--kindergarten").click(function () {
  //   $(".news__wrap--kindergarten").addClass("active");
  // });

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

  //галерея фото 
  $().fancybox({
    selector: '[data-fancybox="popin-img"]',
    thumbs: false,
    hash: false,
    infobar : false,
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
    items:1,
    merge:true,
    loop:true,
    margin: 20,
    video:true,
    // lazyLoad:true,
    center:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true, 
    dots: true,
    nav: true,
    responsive:{
        480:{
            items:2
        },
        600:{
            items:4
        }
    }
});
   
   
});
