$(function(){

    $(window).scroll(function () {
        var currScroll = $(window).scrollTop();
        
        if (currScroll > 0) {
            $('.header-area').addClass('on');
            
        } else {
            $('.header-area').removeClass('on');
    }
});

$(window).trigger('scroll');
});

    