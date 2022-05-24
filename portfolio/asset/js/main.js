$(function(){

    $(".scroll_move").click(function (event) {

      event.preventDefault();

      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);

    });


  // swiper
    var bullet = ['1.Poomgo', '2.andar', '3.study'];
    var brandSlide = new Swiper(".portfolio-slide", {
      slidesPerView: 1,
      spaceBetween: 150,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
      }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
})