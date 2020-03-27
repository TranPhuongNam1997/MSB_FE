$( document ).ready(function() {
    //select
    $('select').click(function () {
        $(this).toggleClass('select-icon-up');
    });
    $('select').focusout(function () {
        $(this).removeClass('select-icon-up')
    });

    //menubar
    var overlay = $("<div class='overlay'></div>")
    $("body").prepend(overlay);

    $(".view-menu-mb").click(function () {
        $(this).toggleClass("change-icon-mb")
        overlay.toggle();
        $(".navigation").toggleClass("open-mb");
    });
    overlay.click(function () {
       $(".view-menu-mb").trigger('click');
    });
    if (window.innerWidth < 992) {
        $(".info-user-wrap").hide();
        $(".user-block").click(function () {
            $(".info-user-wrap").toggle();
            $(this).toggleClass("btn-lightx")
        });

        // js dropdownmenu
        $(".nav-dropdown").hide();
        $('.hasdropdown').click(function () {
            $(".nav-dropdown").slideUp();
            $('.hasdropdown').removeClass('rotate-up');
            if(!$(this).children('ul.nav-dropdown').is(":visible"))
            {
                $(this).children('ul.nav-dropdown').slideDown();
                $(this).addClass('rotate-up');
            }
        });
    }
    //close file name-uploadfile
    $(".close-file").click(function () {
        $(this).parent(".file-return").remove();
    })
});