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
        }, 3000)
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

    
})
