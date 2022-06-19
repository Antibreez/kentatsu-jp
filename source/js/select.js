import select2 from 'select2'
import niceScroll from 'jquery.nicescroll'

$(window).on('load', function () {
  $('.select').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: 'select-dropdown',
  })

  $('.select').on('select2:open', function () {
    $('.select2-results__options').niceScroll({
      autohidemode: false,
      cursorborder: 'none',
      cursorcolor: '#ADB0B4',
    })
  })
})
