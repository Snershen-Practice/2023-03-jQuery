const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

lightbox.option({
  positionFromTop: 100,
  disableScrolling: true,
});

$(".backtop-btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});

$(".nav-item a").click(function (e) {
  if ($(this).siblings().length > 0) {
    if ($(this).hasClass("nav-item-list")) {
      e.preventDefault();
      $(this).next().toggle();
    }
  }
});
