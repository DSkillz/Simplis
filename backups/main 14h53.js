        /* left nav hover handle */
        $(".left li").hover(function () {
            var index = $('.left li').index(this);
            $(".left li:nth(" + index + ")").toggleClass('active');
            $(".right li:nth(" + index + ")").toggleClass('active');
        });
        $(".right li").hover(function () {
            var index = $('.right li').index(this);
            $(".right li:nth(" + index + ")").toggleClass('active');
            $(".left li:nth(" + index + ")").toggleClass('active');
        });

        $(".nav div").hover(function () {
            $(this).toggleClass('active');
        });


        /* hr handle */
        (function ($) {
            var $window = $(window),
                $ElmtDiv = $('section > div:first');
            $ElmtFirstHr = $('.nav div:first');
            $ElmtThirdHr = $('.nav div:nth-child(3)');

            $window.resize(function resize() {
                var bwidth = $('body').width();
                console.log(bwidth)
                if (bwidth >= 1593) { // four columns, large layout
                    $ElmtDiv.removeClass('two-columns one-column')
                    $ElmtFirstHr.addClass('largehr').removeClass('midhr smallhr');
                    $ElmtThirdHr.removeClass('midhr');
                    $("header img:first").addClass('midmargin');
                } else if (bwidth >= 996 && bwidth < 1593) { // two columns, middle layout
                    $ElmtDiv.addClass('two-columns');
                    $ElmtDiv.removeClass('one-column');
                    $ElmtFirstHr.addClass('midhr').removeClass('largehr');
                    $('.nav div').removeClass('smallhr')
                    $ElmtThirdHr.addClass('midhr');
                    /* $("header img:first").addClass('midmargin'); */
                } else if (bwidth >= 768) { 
                    $("header img:first").addClass('midmargin');
                } else if (bwidth < 768) { // one columns, small layout DO NOT TOUCH CONDITION !
                    $ElmtDiv.removeClass('two-columns');
                    $ElmtDiv.addClass('one-column');
                    $('.nav div').removeClass('midhr largehr').addClass('smallhr');
                    $("header img:first").removeClass('midmargin');
                }
            }).trigger('resize');
        })(jQuery);


        /*         $('#selector').css({
                    left: '100px',
                    top: '100px',
                    border: '1px solid red',
                    color: '#f00'
                }); */

        /* .nav div distance */
        /* $('.one').position().left + $('.one').width() * 4 + 167 */