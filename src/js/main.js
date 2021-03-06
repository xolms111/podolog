/* eslint-disable no-invalid-this */
const $ = jQuery
const burger = {
    el: {
        ham: $(`.burger`),
        menuTop: $(`.burger__item_top`),
        menuMiddle: $(`.burger__item_center`),
        menuBottom: $(`.burger__item_footer`),
        navigation: $(`.menu`)
    },
    init: () => {
        burger.bindUIactions()
    },
    bindUIactions: () => {
        burger.el.ham.on(`click`, (event) => {
            burger.activateMenu()
            main.bodyHiden()
            event.preventDefault()
        })
    },
    activateMenu: () => {
        burger.el.menuTop.toggleClass(`burger__item_top_active`)
        burger.el.menuMiddle.toggleClass(`burger__item_center_active`)
        burger.el.menuBottom.toggleClass(`burger__item_footer_active`)
        burger.el.navigation.slideToggle()
    }
}

// Карусель
const carousel = {
    el: $(`.carousel`),
    init: () => {
        carousel.el.owlCarousel(carousel.setting)
    },
    setting: {
        autoplay: true,
        autoplayHoverPause: true,
        dotsContainer: `.dots`,
        dots: true,
        items: 1,
        animateOut: `fadeOut`,
        animateIn: `fadeIn`,
        mouseDrag: false,
        loop: true
    }
}
const modal = {
    el: {
        main: $(`.modal`),
        button: $(`.modal-show`),
        content: $(`.modal__content`)
    },
    showModal: () => {
        modal.el.button.click((e) => {
            e.preventDefault()
            $(`.modal_main`).fadeIn()
            main.bodyHiden()
            return false
        })
    },
    clickNoWrap: () => {
        $(modal.el.main).click((event) => {
            if (!modal.el.content.is(event.target) && modal.el.content.has(event.target).length === 0) {
                modal.el.main.fadeOut()
                main.bodyShow()
            }
        })
    },
    init: () => {
        modal.showModal()
        modal.clickNoWrap()
    }
}
const main = {
    bodyHiden: () => {
        $(`body`).addClass(`hidden`)
    },
    bodyShow: () => {
        $(`body`).removeClass(`hidden`)
    }
}
const service = {
    el: {
        button: $(`.service__item a`)
    },
    showModal: () => {
        service.el.button.click(function(e) {
            e.preventDefault()
            const href = $(this).attr(`href`)
            $(href).fadeIn()
            main.bodyHiden()
            return false
        })
    },
    init: () => {
        service.showModal()
    }
}
$(document).ready(() => {
    burger.init()
    carousel.init()
    modal.init()
    service.init()
})