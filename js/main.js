$(document).ready(function () {
    $(".play-btn").click(function (e) {
        e.preventDefault();
        $(".play-btn").addClass("hidden")
        $(".video").addClass("hidden")
        $(".video-block").trigger("play")
    });
    $(".video-block").trigger("pause")

    // up-arrow
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".btn-up").fadeIn(800)
        } else {
            $(".btn-up").fadeOut(800)
        }
    })

    $(".btn-up").on("click", function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800)
        return false;
    })

    $(".gallery-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1296,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            }
        ]
    })
});