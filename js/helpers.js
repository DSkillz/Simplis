$('head').append('<link rel="stylesheet" href="css/helpers.css" type="text/css" />');

var $window = $(window),
    bwidth = 0;

$('body > div').prepend(`<div class="wd"></div><div class="dwidth"></div><div class="bwidth"></div><div class="bp"></div>`)

$window.resize(function resize() {

    wwidth = $(window).width();
    dwidth = $(document).width(); 
    bwidth = $('body').width();

    $('.wd').text('window: ' + wwidth);
    $('.dwidth').text('doc width: '  + dwidth)
    $('.bwidth').text('body width: ' + bwidth);
}).trigger('resize');
