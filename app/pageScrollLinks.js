function initPageScrollLinks() {
    $('.page-scroll').on('click', function(event) {
        event.preventDefault();

        let target = $(event.target).attr('href'),
            elem = $(target),
            offset = elem.offset().top - 60;

        $('body, html').animate({scrollTop: offset + 1}, 500);
    });
};

module.exports = initPageScrollLinks();
