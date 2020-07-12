var QUOTE = QUOTE ? QUOTE : {};

QUOTE.menu = {
    changeActiveMenuState: function () {
        let $menus = $('.nav__component--menu-submenu');
        $menus.on('click', function (event) {
            var $currentMenu = $(event.currentTarget);
            QUOTE.menu.removeActiveState($menus, 'submenu-active');
            $currentMenu.addClass('submenu-active');
        });
    },

    removeActiveState: function (obj, className) {
        obj.each(function () {
            if ($(this).hasClass(className)) {
                $(this).removeClass(className);
            }
        });
    }
}

$(document).ready(function () {
    QUOTE.menu.changeActiveMenuState();
});

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