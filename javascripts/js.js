// $(document).ready(function() {
//   $('.decor_2').click( function(event){
//     event.preventDefault();
//     $('#myOverlay').fadeIn(297, function(){
//       $('#myModal')
//       .css('display', 'block')
//       .animate({opacity: 1}, 198);
//     });
//   });
//
//   $('#myModal__close, #myOverlay').click( function(){
//     $('#myModal').animate({opacity: 0}, 198,
//       function(){
//         $(this).css('display', 'none');
//         $('#myOverlay').fadeOut(297);
//     });
//   });
// });
// $(window).scroll(function(){
//   var scroll=$(window).scrollTop();
//   $('.background').css({filter:"blur("+
//   (scroll/20)+"px"})
// });
$(document).ready(function() {
  $('#p3').on({
    mouseenter: function() {
     $('.photo_hover').animate({
       opacity: '100%'},350);
   },
   mouseleave: function() {
     $('.photo_hover').animate({
       opacity: '0%'},400);
   }
 })
 $('#p1').on({
   mouseenter: function() {
    $('.event_hover').animate({
      opacity: '100%'},350);
  },
  mouseleave: function() {
    $('.event_hover').animate({
      opacity: '0%'},400);
  }
})
$('#p2').on({
  mouseenter: function() {
   $('.pVAR2').css(
     'background', "-webkit-linear-gradient(#CAFF44, #FC2F17)");
  }
  });
  });

$(document).ready(function() {
$('.poster1').on({
mouseenter: function() {
   $('body').css('background', "url(./img/background_poster_1.png)");
},
mouseleave: function() {
   $('body').css('background', 'black');
 }
})
 $('.poster2').on({
 mouseenter: function() {
    $('body').css({
      WebkitTransition : 'opacity 1s ease-in-out',
    MozTransition    : 'opacity 1s ease-in-out',
    MsTransition     : 'opacity 1s ease-in-out',
    OTransition      : 'opacity 1s ease-in-out',
    transition       : 'opacity 1s ease-in-out',
      background: "url(./img/background_poster_2.png)"});
 },
 mouseleave: function() {
    $('body').css({'background':"black","transition":"2s"});
  }
  })
  $('.poster3').on({
  mouseenter: function() {
     $('body').css('background', "url(./img/background_poster_3.png)");
  },
  mouseleave: function() {
     $('body').css('background', 'black');
   }
   })
   $('.poster4').on({
   mouseenter: function() {
      $('body').css('background', "url(./img/background_poster_4.png)");
   },
   mouseleave: function() {
      $('body').css('background', 'black');
    }
});
});

  // $('body').css({'background': "url(./img/background_poster_2.png)","transition":"2s"});
// $(document).ready(function() {
//   $('#p1').hover(function() {
//       $($(this).data('id')).show();
//   });
