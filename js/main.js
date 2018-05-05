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

        /*         $('#selector').css({
                    left: '100px',
                    top: '100px',
                    border: '1px solid red',
                    color: '#f00'
                }); */

        /* .nav div distance */
        /* $('.one').position().left + $('.one').width() * 4 + 167 */