const html = document.documentElement;
$(document).ready(function () {
    var $horizontal = $('#horizontal');
    
    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));
        if(s >= c){
            var position = (scrollPercent * ($(document).width()));
            $horizontal.css({
                'right': position
            });
            console.log(s,d,c,position)
        }
    });
});