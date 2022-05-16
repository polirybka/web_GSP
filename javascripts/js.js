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
$('.poster1')
.on("mouseenter", function() {
   $('body').css('background', "url(./img/background_poster_1.png)");
   $('a').css('color','#CAFF44');
});
})
$('.poster1')
.on("mouseleave", function() {
   $('body').css('background', 'none');
   $('a').css('color','black');
 });

$(document).ready(function() {
 $('.poster2')
 .on("mouseenter", function() {
    $('body').css('background', "url(./img/background_poster_2.png)");
 });
 })
 .on("mouseleave", function() {
    $('body').css('background', 'none');
  });

// $(document).ready(function() {
//   $('#p1').hover(function() {
//       $($(this).data('id')).show();
//   });
