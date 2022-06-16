const $navBtn = $('.header__nav-button')

$navBtn.on('click', function () {
  $(this).parents('.header').toggleClass('opened')
})
