        /* left nav handle */
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
                if (996 < bwidth < 1725) {
                    $ElmtDiv.addClass('two-columns');
                    $ElmtFirstHr.addClass('smallhr').removeClass('largehr');
                    $ElmtThirdHr.addClass('smallhr');
                } else if (753 < bwidth < 996){
                    $ElmtDiv.removeClass('two-columns');
                    $ElmtFirstHr.addClass('largehr').removeClass('smallhr');
                    $ElmtThirdHr.removeClass('smallhr');
                } else {
                    
                }

                if ($('body').width() < 1000) {
                    //$ElmtDiv.toggleClass('one-column', 'two-columns');
                } else {

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