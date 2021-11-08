(function ($) {
    // Mobile Menu
    jQuery(document).ready(function ($) {
        $(".menuBar").click(function () {
            $(".menu-area").toggleClass("menu-active");
        });
    });
    //   scrollTop  =========================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click =================
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    // scroll body to 0px on click =================
})(jQuery);
