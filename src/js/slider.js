$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  infinite: true,
  nextArrow: '<img class="slick-prev" src="img/arrow/arrow-prev.png" alt="arrow left">',
  prevArrow: '<img class="slick-next" src="img/arrow/arrow-next.png" alt="arrow right">',
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});