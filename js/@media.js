var $ElmtDiv = $('section > div:first'),
    $ElmtFirstHr = $('.nav div:first'),
    $ElmtThirdHr = $('.nav div:nth-child(3)');

$(window).setBreakpoints({
    // use only largest available vs use all available
    distinct: true,
    // array of widths in pixels where breakpoints
    // should be triggered

    // Bootstrap breakpoints:
    // bp   | nom si inférieur à
    // 
    //   < 576  | xs
    //   < 768  | xs
    //   > 768  | sm
    //   > 992  | md
    //   > 1200 | lg

    // custom bp
    breakpoints: [
        576,  // custom
        768,  // bootstrap bp
        992,  // bootstrap bp
        1200, // bootstrap bp
        1616  // custom
    ]
});

// entry -> inférieur à val breakpoint ( = min-width)
// exit -> supérieure ( = max-width )

$(window).bind('enterBreakpoint576', function () { // min-width
    // $('.row nav').addClass('sm');
});

$(window).bind('exitBreakpoint576', function () { // max-width

});

$(window).bind('enterBreakpoint768', function () {
    // $("header img:first").addClass('midmargin');
});

$(window).bind('exitBreakpoint768', function () {
    $ElmtDiv.removeClass('two-columns');
    $ElmtDiv.addClass('one-column');
    $('.nav div').removeClass('midhr largehr').addClass('smallhr');
    $("header img:first").removeClass('midmargin');
});


$(window).bind('enterBreakpoint992', function () {
    // gestion des 4 div de la nav
    $ElmtDiv.addClass('two-columns');
    $ElmtDiv.removeClass('one-column');
    $ElmtFirstHr.addClass('midhr').removeClass('largehr');
    $('.nav div').removeClass('smallhr')
    $ElmtThirdHr.addClass('midhr');
});

$(window).bind('exitBreakpoint992', function () {

});

$(window).bind('enterBreakpoint1616', function () {
    $ElmtDiv.removeClass('two-columns one-column')
    $ElmtFirstHr.addClass('largehr').removeClass('midhr smallhr');
    $ElmtThirdHr.removeClass('midhr');
    $("header img:first").addClass('midmargin');
});

$(window).bind('exitBreakpoint1616', function () {
    $ElmtDiv.addClass('two-columns');
    $ElmtDiv.removeClass('one-column');
    $ElmtFirstHr.addClass('midhr').removeClass('largehr');
    $('.nav div').removeClass('smallhr')
    $ElmtThirdHr.addClass('midhr');
});