$(function(){
    /*
    @헤더 스크롤 이벤트
    khj
    2022.04.22
    */
    
    /*스와이퍼
    khj
    */
    var bannerSlider = new Swiper(".visual-banner", {
        effect:"fade",
        loop:true,
        touchRatio: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".visual-banner .fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".visual-banner .next",
            prevEl: ".visual-banner .prev",
        },
    });

        // 탭메뉴
        $('.tab-item').click(function () {
            var activeTab = $(this).attr('data-tab');
            var leftVal = $(this).position().left;

            gsap.to('.move-praricle',{left:leftVal})

            $('.tab-item').removeClass('on');
            $('.tab-cont').removeClass('on');
            $(this).addClass('on');
            $('#' + activeTab).addClass('on');
        });

        
        $(".tab_list li a").click(function(e){
            e.preventDefault();
        })


        // 가로 스크롤
    gsap.to('.experience-list' , {

        scrollTrigger:{
            trigger:'.section-experience',
            start:"top top", //트리거의 시작점, 윈도우의 시작점
            // end:"bottom top",
            end:'+=300%',
            // markers:true,
            scrub:1,
            pin:'.section-experience',
            // onLeave:function(){
            //     $('.section-experience').addClass('fixed')
            // }
        },
        xPercent: -300
    })



    // 배너 스크롤
    gsap.to('.section-banner1' , {

        scrollTrigger:{
            trigger:'.section-banner1',
            start:"top 100%", //트리거의 시작점, 윈도우의 시작점
            end:"bottom top",
            // end:'+=300%',
            // markers:true,
            scrub:1,
            // pin:'.section-experience',
            // onLeave:function(){
            //     $('.section-experience').addClass('fixed')
            // }
        },
        width:100+'%'
    })



    // function-list
    // fadeUp = gsap.fromTo('.function-item',{
    //     opacity:0,
    // },{
    //     opacity:1,
    //     stagger:0.2
    // })

    // ScrollTrigger.create({
    //     animation:fadeUp,
    //     trigger:'.function-item',
    //     start:'top 80%',
    //     end:'bottom top',
    //     markers:'true',
    // })
    

    // gsap.uuils.toArray('.title').forEach(item=>{
    //     console.logo(item);
    // })
    //타이틀 요소 전체 선택

    // $('.common_fadeUp').each(function(index,item){
    //     child = $(this).find('*');
    // })
     //자식전체
    
    $('.fadeup').each(function(index,item){

        child = $(this).find('li');
        
        fadeUp = gsap.fromTo(child,{
            opacity:0,
        },{
            opacity:1,
            stagger:0.2
        })
    
        ScrollTrigger.create({
            animation:fadeUp,
            trigger:$(this),
            start:'top 80%',
            end:'bottom top',
            // markers:'true',
        })
    });

    }); //jquey
