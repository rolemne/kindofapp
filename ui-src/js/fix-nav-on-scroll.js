QUOTE.nav = {
    fixNavMenuOnScroll: function () {
        var $nav = $('nav');
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 130) {
                $nav.addClass('fixed-top-left');
            } else {
                $nav.removeClass('fixed-top-left');
            }
        });
    }
}

$(document).ready(function () {
    QUOTE.nav.fixNavMenuOnScroll();
});