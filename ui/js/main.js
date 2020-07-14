var QUOTE = QUOTE ? QUOTE : {};

QUOTE.menu = {

    activeMenu: $('.nav__component--menu-submenu.submenu-active'),

    changeActiveMenuState: function () {
        let $menus = $('.nav__component--menu-submenu');
        $menus.on('click', function(event) {
            var $currentMenu = $(event.currentTarget);
            if (!$currentMenu.hasClass('submenu-active')) {
                QUOTE.menu.activeMenu.removeClass('submenu-active');
                $currentMenu.addClass('submenu-active');
                QUOTE.menu.activeMenu = $currentMenu;
            }
        })
    },
}

$(document).ready(function () {
    QUOTE.menu.changeActiveMenuState();
});