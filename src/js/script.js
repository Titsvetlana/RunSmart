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

});
