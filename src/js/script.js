$(document).ready(function () {
    // слайдер
    $('.carousel__inner').slick({
        speed: 1300,
        // adaptiveHeight: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function () {
        $(this)
            // переключает кнопки для фитнеса/для бега/для триатлона
            .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
            // появляется контент соответствующей вкладке
            .closest('div.catalog__container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         // даем команду отмены стандартного поведения браузера (при переходе на ссылки)
    //         e.preventDefault();
    //         // toggleClass - автоматическое переключение на класс
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    // $('.catalog-item__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         // даем команду отмены стандартного поведения браузера (при переходе на ссылки)
    //         e.preventDefault();
    //         // toggleClass - автоматическое переключение на класс
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // });
    // ==========
    // аптимизируем наш код
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                // даем команду отмены стандартного поведения браузера (при переходе на ссылки)
                e.preventDefault();
                // toggleClass - автоматическое переключение на класс
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // ======

    //Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thenks, #order').fadeOut('slow');
    });

    // ищем наименование товара
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // валидация форм
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно ввден адрес почты. Пример: name@domain.com"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    // маска для form
    $('input[name=phone]').mask("(999) 999-9999");

    // scroll / pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
