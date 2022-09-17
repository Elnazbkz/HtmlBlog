$(document).ready(function(){
    $('.open-searchbar').click(function(){
        $('.search-box').addClass('active')
    });

    $('.close-searchbar').click(function(){
        $('.search-box').removeClass('active')
    });

    //// Home Slider
    $('.home-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    })
});