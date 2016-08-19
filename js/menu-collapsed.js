function initMenu() {
    var selector = '#menu-category > li > a';
    $('#menu-category ul').hide();
    $(selector).on('click', function () {

        $(selector).find('active').toggleClass('active');
        $(this).toggleClass('active').next().slideToggle('normal').removeAttr('onclick');
        return false;
    });
}
$(document).ready(function () {
    initMenu();
});

function addActiveSort() {
    $(".sort li a").click(function (e) {
        $(".sort li a").removeClass('active');
        $(this).addClass('active');
        return false;
    })
}
$(document).ready(function () {
    addActiveSort();
});

function addCategory() {
    $(".add-categort ul#addCategory").hide();
    $(".add-categort  .addCat").click(function (e) {
        $("ul#addCategory").show();
        return false;
    })
    $("body").click(function (e) {
        $("ul#addCategory").hide();
    })
    
            $(".add-categort ul#addCategory li a ").click(function (e) {
            $(this).clone()
                .appendTo(".add-categort .show-cat li");
            $(this).addClass("newElement");
                
            $(".add-categort ul.show-cat li a ").click(function (e) {
                $(this).remove();
                $(".add-categort ul#addCategory li a ").removeClass("newElement");
                return false;
            })

        })
             $(".add-categort ul.show-cat li a ").click(function (e) {
                $(this).remove();
                $(".add-categort ul#addCategory li a ").removeClass("newElement");
                 return false;
            })
 
}
$(document).ready(function (e) {
    addCategory();
});


