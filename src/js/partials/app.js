$(document).ready(function(){

    //init banner slider
    $('.banners-wrapper').slick({
        dots: true,
        arrows: false
    });

    //init video player
    const player = new Plyr('#player', {});
    //init rating
    $('.rating').raty({
        half: false,
        starOff: 'img/star-clear.svg',
        starOn: 'img/star-red.svg'
    });

    $('.movie-item.vertical .rating').raty({
        half: false,
        starOff: 'img/black-star.svg',
        starOn: 'img/star-red.svg'
    });

    var container = $('.movies-wrapper');

    container.masonry({
        itemSelector: '.movie-item',
        columnWidth: '.movie-item',
        percentPosition: true
    });
    
    additions();
});

function additions(){
    var temp = '<div class="director-block"><div class="director-photo"><img src="" alt=""></div><div class="director-name"></div></div>';
    $(temp).appendTo('.banners-wrapper .slick-dots li');

    var sliders = $('.banners-wrapper .slick-dots').children().length;
    for(var i=1; i<=sliders; i++){
        $('.banners-wrapper .director-photo img').eq(i-1).attr('src', $('.banner'+i).attr('data-photo'));
        $('.banners-wrapper .director-name').eq(i-1).html($('.banner'+i).attr('data-name'));
    }

    
}
