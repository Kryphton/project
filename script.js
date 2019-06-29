$(document).ready(function(){
   
   document.querySelector('.btn-all').onclick =function(){
      $('.p1').show(300);
      $('.p2').show(300);
      $('.p3').show(300);
      $('.p4').show(300);
      $('.p5').show(300);
      $('.p6').show(300);
   };
   document.querySelector('.btn-web').onclick=function(){
    $('.p1').hide(300);
    $('.p4').show(300);
    $('.p6').hide(300);
    $('.p2').hide(300);
    $('.p3').show(300);
    $('.p5').show(300);
   };
   document.querySelector('.btn-des').onclick=function(){
    $('.p5').hide(300);
    $('.p6').hide(300);
    $('.p2').hide(300);
    $('.p4').show(300);
    $('.p1').show(300);
    $('.p3').show(300);  
};
document.querySelector('.btn-mock').onclick=function(){
   $('.p3').hide(300);
  $('.p5').hide(300);
   $('.p1').hide(300);
   $('.p2').show(300);
   $('.p4').show(300);
   $('.p6').show(300); 
};
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();
    var blockid = $(this).data('scroll');
        blockgg = $(blockid).offset().top;
        console.log(blockgg);
$("html, body").animate({
   scrollTop: 757
  }, 500); 
});

$(window).on("scroll", function (){
   var scroll_top = $(this).scrollTop();
   console.log(scroll_top);
});
});