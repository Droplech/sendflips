$(document).ready(function(){
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
            $('.select').find("i").removeClass('select_active')
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
            $('.select').find("i").addClass('select_active')
        }
    });
    
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
        $('.select').find("i").removeClass('select_active')
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $('.select').find("i").removeClass('select_active')
        }
    });




    
    
    if(screen.width > 1200){
        let heightItem = [...document.querySelectorAll('.info_block')];

        heightItem.forEach(item => {
            let textWrapper = item.querySelector('.txt');
            let height = textWrapper.clientHeight;
            let translate = -height + item.clientHeight - parseInt(getComputedStyle(item).paddingTop)

            console.log(translate)

            gsap.to(textWrapper, {
                y: translate,
                scrollTrigger: {
                    start: "top top",
                    trigger: item,
                    end: () => '+=' + height,
                    scrub: true,
                    pin: true,
                },
            });
        })
    }



    const tabs = document.querySelectorAll('.video_txt_wrapper');
    let counter = 1;
    let t;
    
    function changeTabs() {

        t = setTimeout(function() {
            tabs.forEach(function(elem) {
                $(elem).removeClass('video_txt_active')
                $('.video_txt_wrapper').removeClass('video_txt_active')
               
            })
            $(tabs[counter]).addClass('video_txt_active')
            counter++
            counter = counter == tabs.length ? 0 : counter;
            changeTabs()
        }, 5000)
    }

    changeTabs()
    
    

    $('.video_play').click(function(){
        $('.modal_bg_color').fadeIn()
        $('.modal_video').fadeIn()
    })
    $('.modal_bg_color, .modal_video').click(function(){
        $('.modal_bg_color').fadeOut()
        $('.modal_video').fadeOut()
    })


    $('.tabs_link').click(function(e){
        e.preventDefault()
        $('.tabs_link').removeClass('active-link')
        $(this).addClass('active-link')
        $('.tabs_content_img').fadeOut()
        setTimeout(() => {
            $( $(this).attr('data-tab') ).fadeIn()
        }, 400);
        
        
    })

    $('.ready_linkTab').click(function(e){
        e.preventDefault()
        $('.ready_linkTab').removeClass('active-readyLink')
        $(this).addClass('active-readyLink')
        $('.ready_tabs_content').fadeOut()

        setTimeout(() => {
            $( $(this).attr('data-tab') ).fadeIn()
        }, 400);
        
    })


    if(screen.width < 900 ){
        $('.ready_linkTab').click(function(e){
            e.preventDefault()
            $('.ready_linkTab').removeClass('active-readyLink')
            $(this).addClass('active-readyLink')
            $('.pop_up_tabsContent').fadeIn()
            $('.pop_up_bg').fadeIn()
            $('.ready_tabs_content').removeClass('mob_tabContent-active')
            $( $(this).attr('data-tab') ).addClass('mob_tabContent-active')
            
            
        })
        $('.close_pop_up, .pop_up_bg').click(function(){
            $('.pop_up_tabsContent').fadeOut()
            $('.pop_up_bg').fadeOut()
            $('.ready_tabs_content').removeClass('mob_tabContent-active')
        })
    }

    new Swiper('.solutions_slider',{
        slidesPerView: 1.2,
        spaceBetween: 20,
        
        navigation: {
            nextEl: '#solutions_next',
            prevEl: '#solutions_prev',
        },
        breakpoints: {
            600:{
                slidesPerView: 1.5,
            },
            1366:{
                slidesPerView: 2.1,
            },
            1680:{
                slidesPerView: 2.5,
            },
            1920:{
                slidesPerView: 2.9,
            }
        }
        // loop: true,
    })

    new Swiper('.feedback_slider',{
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
        breakpoints: {
            400:{
                slidesPerView: 1.4,
            },
            600:{
                slidesPerView: 2,
            },
            1025:{
                slidesPerView: 2,
            },
            1440:{
                slidesPerView: 2.4,
            },
            1680:{
                slidesPerView: 2.7,
            },
            1920:{
                slidesPerView: 3.2,
            }
        },
        autoplay: {
            delay: 5000,
        },
        loop: true,
    })



    $('.burger_button').click(function(){
        if( !$('.burger_button').hasClass('menu-active') ){
            $(this).addClass('menu-active');
            $('.video_play').addClass('disabled');
            $('.burger_menu').fadeIn();
            $('.select__list').addClass('burger_active_btn')
        }
    })
    $('.burger_close_button, .burger_link').click(function(){
        $('.burger_button').removeClass('menu-active');
        $('.video_play').removeClass('disabled');
        $('.burger_menu').fadeOut();
        $('.select__list').removeClass('burger_active_btn')
    })
   
    

    
    



    
})
