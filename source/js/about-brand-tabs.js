import Swiper, {FreeMode} from 'swiper'

$(window).on('load', () => {
  const swiper = new Swiper('.about-brand__tabs .tabs', {
    modules: [FreeMode],

    freeMode: {
      enabled: true,
    },

    slidesPerView: 'auto',
    watchOverflow: true,
  })

  const $tabs = $('.about-brand__tabs .tab')
  const $blocks = $('.about-brand__part')

  $tabs.on('click', function () {
    if ($(this).hasClass('active')) {
      return
    }

    const name = $(this).attr('data-tab')

    $tabs.removeClass('active')
    $(this).addClass('active')

    $blocks.hide()
    $blocks.parent().find(`[data-block='${name}']`).show()
  })
})
