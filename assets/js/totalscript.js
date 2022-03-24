$(document).ready(function () {

    $('.team_members').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        speed: 300,
        slidesToScroll: 1,
        pauseOnHover: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToShow: 1
                }
            }
        ]


    });
});