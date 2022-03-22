$(function(){

    // topBanner:22.03.17 //
    function topBannerHandler(){
      //  $('.topBanner').hide();  display:none;//
    $('.topBanner').slideUp();
    }
    $('.topBanner .container i').on('click', topBannerHandler)

    
    $('.mainSlide').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        nextArrow: '<div class="rightArrow"></div>',
        prevArrow: '<div class="leftArrow"></div>'
    });
    
    
    // 슬라이드에 애니메이션 주기
    $('.mainSlide figure').eq(1).addClass('oo');
    $('.mainSlide').on('afterChange',function(e,s,c){
      console.log(e,s,c);
      $('.mainSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
      if (c===1) {
        $('.leftArrow').addClass('oo')
      } else {
        $('.leftArrow').removeClass('oo')
      }
      
    });

    $('.eProductSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
    });


    
    
    $('.eventProduct i:nth-of-type(1)').on('click', function(){
       $('.eProductSlide').slick('slickPause')
    });
  
    $('.eventProduct i:nth-of-type(2)').on('click', function(){
       $('.eProductSlide').slick('slickPlay')
    });


    $('.aproductSlide').slick({
        infinite:true,
        arrows:false,
        dots:true,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:1000,
        centerMode: true,
        centerPadding: '0',



        
    });

    $('.allProduct i:first-child').on('click', function(){
       $('.aproductSlide').slick('slickPrev')
    });
    
    $('.allProduct i:last-child').on('click', function(){
       $('.aproductSlide').slick('slickNext')
    });
  
    

    ////////////////////////////// 
    // 유튜브 플레이어를 쓰는 방법
    $("#bgndVideo").YTPlayer({
      videoURL:'https://youtu.be/TqFLIZG_aXA',
      containment:'.movieBg',
      autoPlay:true, 
      mute:true, 
      startAt:0, 
      opacity:1,
      showControls:false,
      playOnlyIfVisible:true,  //내가 볼때 재생하기//
      startAt:9,
    }); 

   $('.movieBg i:first-child').on('click', function(){
        $("#bgndVideo").YTPPause();
   });

   $('.movieBg i:last-child').on('click', function(){
        $("#bgndVideo").YTPPlay();
   });

  
   $('.tapMenu li').on('click', function(){
        
        var idx = $(this).index();
        $(this).addClass("oo").siblings().removeClass("oo");
        $('.tapContent>div').eq(idx).addClass("oo").siblings().removeClass("oo");
   });

  $('#link').on('change', function(){
        let linkSite = $(this).val();
        if (!linkSite) return;
        window.open(linkSite)
  })


   $('.popup01 button').on('click',function(){
        $(this).parent().hide();
   });
   


})

// nth child 1 = index 0
//$(this).index(번호)
// .eq = 몇 번째 자식
// siblings 나를 제외한 모든 자식

