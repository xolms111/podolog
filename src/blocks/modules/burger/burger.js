const burger = {
    el: {
        ham: $('.burger'),
        menuTop: $('.burger__item_top'),
        menuMiddle: $('.burger__item_center'),
        menuBottom: $('.burger__item_footer'),
        navigation: $('.menu')
    },
    init: () => {
        burger.bindUIactions();
    },
    bindUIactions: () => {
        burger.el.ham.on('click', (event) => {
            burger.activateMenu()
            event.preventDefault();
        })
    },
    activateMenu: () => {
        burger.el.menuTop.toggleClass('burger__item_top_active')
        burger.el.menuMiddle.toggleClass('burger__item_center_active')
        burger.el.menuBottom.toggleClass('burger__item_footer_active')
        burger.el.navigation.slideToggle()
    }
}

burger.init()