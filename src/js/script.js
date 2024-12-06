$(document).ready(function () {
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
});
