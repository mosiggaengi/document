$(function(){

    // topBanner:22.03.17 //
    function topBannerHandler(){
      //  $('.topBanner').hide();  display:none;//
    $('.topBanner').slideUp();
    }
    $('.topBanner .container i').on('click', topBannerHandler)

    
    $('.mainSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
    });

    







})
