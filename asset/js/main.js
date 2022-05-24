$(function(){
  var brandSlide = new Swiper(".andar", {
      slidesPerView: 'auto',
      spaceBetween: 80,
      freeMode: true,
      loop : true,
    });
    
    brandSlide.on('touchStart',function(){
      $('.swiper-slide').addClass('on');
    })
    brandSlide.on('touchEnd',function(){
      $('.swiper-slide').removeClass('on');
    })
    brandSlide.on('touchStart',function(){
      $('.txt').addClass('on');
    })
    brandSlide.on('touchEnd',function(){
      $('.txt').removeClass('on');
    })

    // gsap.from(".txt_box", {
    //   scrollTrigger: ".section_visual",
    //   durarion:2,
    //   y : 100
    // });



    // 쓰는것만 구분해서 분류
    // gsap 반응형
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.saveStyles(".mobile, .desktop");

    ScrollTrigger.matchMedia({

      "(max-width: 768px)": function () {
        //마우스 오버 해제
        $('.video_cont').mouseover(function (e) {
          gsap.to('.cursor', {
            background: 'none',
            width: 40 + 'px',
            height: 40 + 'px',
            border: '1px solid #fff',
            fontSize: 1 + 'rem',
            lineHeight: 0 + 'px',
          })
          $('.play').text('');
        });

        $('.authentic_img').mouseover(function (e) {
          gsap.to('.cursor', {
            background: 'none',
            width: 40 + 'px',
            height: 40 + 'px',
            border: '1px solid #fff',
            fontSize: 1 + 'rem',
            lineHeight: 0 + 'px',
          })
          $('.play').text('');
        });

        $('.swiper-slide').mouseover(function (e) {
          gsap.to('.cursor', {
            background: 'none',
            width: 40 + 'px',
            height: 40 + 'px',
            border: '1px solid #fff',
            fontSize: 1 + 'rem',
            lineHeight: 0 + 'px',
          })
          $('.play').text('');
        })

      },

      // 769이상 
      "(min-width: 769px)": function () {

        $(window).trigger('scroll');
        $('body').mousemove(function (e) {
          min = $('.cursor').width() / 2
          x = e.clientX - min;
          y = e.clientY - min;
          gsap.to('.cursor', {
            x: x,
            y: y
          })
        });


        //비디오 마우스 오버
        $('.video_cont').mouseover(function (e) {
          gsap.to('.cursor', {
            background: '#4CB4FF',
            width: 150 + 'px',
            height: 150 + 'px',
            border: 'none',
            fontSize: 3 + 'rem',
            lineHeight: 150 + 'px',
          })
          $('.play').text('Play');
        });
        $('.video_cont').mouseout(function (e) {
          gsap.to('.cursor', {
            background: 'none',
            width: 40 + 'px',
            height: 40 + 'px',
            border: '1px solid #fff',
            fontSize: 1 + 'rem',
            lineHeight: 0 + 'px',
          })
          $('.play').text('');
        });

        totalWidth = 0;
        $('.authentic_item').each(function () {
          totalWidth += $(this).outerWidth();
        })
        result = totalWidth - $(window).outerWidth()
        // console.log(result);

        // 컨텐츠 가로 스크롤
        gsap.to('.authentic_list', {
          scrollTrigger: {
            trigger: '.authentic_list',
            start: "top 30px",
            // end:"bottom top",
            end: '+=600%',
            // markers:true,
            scrub: 1,
            pin: '.section_authentic',
          },
          // delay:1,
          x: -result
        })

        // 이미지 마우스오버
        $('.authentic_img').mouseover(function (e) {
          gsap.to('.cursor', {
            background: '#4CB4FF',
            width: 150 + 'px',
            height: 150 + 'px',
            border: 'none',
            fontSize: 3 + 'rem',
            lineHeight: 150 + 'px',
          })
          $('.play').text('View');
        })
        $('.authentic_img').mouseout(function (e) {
          gsap.to('.cursor', {
            background: 'none',
            width: 40 + 'px',
            height: 40 + 'px',
            border: '1px solid #fff',
            fontSize: 1 + 'rem',
            lineHeight: 0 + 'px',
          })
          $('.play').text('');
        })
        //슬라이드 마우스 오버
        $('.swiper-slide').mouseover(function (e) {
          gsap.to('.cursor', {
            background: '#4CB4FF',
            width: 60 + 'px',
            height: 60 + 'px',
            border: 'none',
            fontsiez: 10 + 'px',
            lineHeight: 60 + 'px',
          })
          $('.play').text('<  o  >');
        })

        $('.swiper-slide').mouseout(function (e) {
          gsap.to('.cursor', {
            background: 'none',
            width: 40 + 'px',
            height: 40 + 'px',
            border: '1px solid #fff',
            fontSize: 1 + 'rem',
            lineHeight: 0 + 'px',
          })
          $('.play').text('');
        })
      },
    });

gsap.registerPlugin(ScrollTrigger);
gsap.to('.line1', {
  scrollTrigger: {
    trigger: '.scroll_txt',
    start: 'top bottom',
    end: 'bottom top',
    // markers: true,
    scrub: 1,
  },
  xPercent: -30,
  // duration : 2,
});
gsap.to('.line2', {
  scrollTrigger: {
    trigger: '.scroll_txt',
    start: 'top bottom',
    scrub: 1,
  },
  xPercent: 30,
  // duration : 2,
});
gsap.to('.line3', {
      scrollTrigger: {
        trigger: '.scroll_txt',
        start: 'top bottom',
        scrub: 1,
      },
      xPercent: -30,
      // duration : 2,
});


})