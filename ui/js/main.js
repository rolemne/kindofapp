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