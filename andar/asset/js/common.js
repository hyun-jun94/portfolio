$(function () {

    // 헤더 스크롤 배경
    $(window).scroll(function () {
        var currScroll = $(window).scrollTop();

        if (currScroll > 0) {
            $('.header_area').addClass('on');

        } else {
            $('.header_area').removeClass('on');
        }
    });
    
    $('.menu_bt').click(function () {
        $('.menu_bt').toggleClass('on');
        $('.side-menu').fadeToggle();
        $('.side-menu').toggleClass('on');
    });
});

    