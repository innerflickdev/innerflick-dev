$(document).ready(function () {
// parallax
    $('.parallax').parallax();


// show hidden text
    $('.hidden').show(2000);
    $('#heading').animate({'margin-left': '200px'}, 2000);
    
    
// scroll to about me
    $('#aboutLink').click(function () {
        $('html, body').animate({
            scrollTop: ($('#aboutUs').offset().top)
        }, 2000);
    });
    
    
// scroll to contact
    $('#contactLink').click(function () {
        $('html, body').animate({
            scrollTop: ($('#contactUs').offset().top)
        }, 2000);
    });
    $('#contactLK').click(function () {
        $('html, body').animate({
            scrollTop: ($('#contactUs').offset().top)
        }, 2000);
    });
    
    
// show showcase
    $('#showCLink').click(function () {
        $('html, body').animate({
            scrollTop: ($('#more').offset().top)
        }, 2000);
    });


// scroll to top of page 
    $('#click').mouseover(function () {
        $('#click').css('color', 'grey');
    });
    $('#click').mouseout(function () {
        $('#click').css('color', 'white');
    });
    $('#click').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});