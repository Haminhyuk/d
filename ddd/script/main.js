
$(document).ready(function(){

  $("nav > ul > li").mouseenter(function(){
    $("nav > ul > li > ul").stop().slideDown();
  });
  $("nav > ul > li").mouseleave(function(){
    $("nav > ul > li > ul").stop().slideUp();
  });

      // 공지사항 탭버튼
      var tabBtn = $(".tab_btn > ul > li");
      var tabCont = $(".tab_cont > div");
  
      tabCont.hide().eq(0).show();
  
      tabBtn.click(function(e){
        e.preventDefault();
  
        var target = $(this);
        var index = target.index();
  
        tabBtn.removeClass("active");
        target.addClass("active");
  
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
      });
  
      $('.popuplayer').click(function(){
        $('.layer').show();
        $('.layerbg').show();
      })
      $('.close').click(function(){
        $('.layer').hide();
        $('.layerbg').hide();
      })

});


setInterval(function(){
  $('.slideList').animate({
      left: '-1200px'
  },function(){
      $('.slideImg').eq(0).appendTo('.slideList');
      $('.slideList').css({
          left: 0
      });
  });
},3000);

