function animatedProgressBar() {
    var windowWidth = $(window).width();

    if (windowWidth > 992) {
        $(window).scroll(function () {
            $('.animatedEntrance').each(function () {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();

                if (imagePos < topOfWindow + 60) {
                    $('.progress-bar-value').css('visibility', 'visible').addClass('animated').addClass('slideInLeft');
                    $('.progress-bar').css('visibility', 'visible').addClass('animated').addClass('slideInLeft');
                }

            })
        });
    }
}

module.exports = animatedProgressBar;