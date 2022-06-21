import 'jquery-ui-bundle'
import 'inputmask/dist/jquery.inputmask'

import './select'
import './modal'
import './phone-input'

import './nav'
import './quality-tabs'
import './about-brand-tabs'
import './modal-partnership'
import './series-slider'

$(window).on('load', function () {
  if ($('.review__data-actions').length > 0 && $(window).width() < 768) {
    $('.footer').css('padding-bottom', '70px')
  }
})
