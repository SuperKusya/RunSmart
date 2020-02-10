$(document).ready(function() {
    // SLIDER

    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="./icons/sprite.svg#arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="./icons/sprite.svg#arrow"></use></svg></button>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    // TABS

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');

    });

    function toogleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(Math.floor(i/2)).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(Math.floor(i/2)).toggleClass('catalog-item__list_active');
            })
        });
    }
    toogleSlide('.catalog-item__toggle');


    // MODAL
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation,  #order, #thanks').fadeOut('slow');
    });

    $('.btn_min').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    // VALIDATE FORMS

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: {
                    required: true,
                    digits: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: 'Пожалуйста, введите свой номер телефона',
                email: {
                  required: "Пожалуйста, введите свой почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    // VALIDATE PHONE

    $('input[name=phone]').mask("+7(999) 999-99-99");

    // Smooth scroll and page-up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // Smooth scroll for animations 
    new WOW(
        {
            mobile: false,
        }
      ).init();

});





