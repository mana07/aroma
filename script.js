$(function(){
  $('.nav-font').on('mouseover',function(){
    $(this).animate({
      opacity:0.5,
    },100);
  });

  $('.nav-font').on('mouseout',function(){
    $(this).animate({
      opacity:1.0,
    },100);
  });

  $('.zoom').on('mouseover',function(){
    $(this).animate({
      opacity:0.5,
    },100);
  });

  $('.zoom').on('mouseout',function(){
    $(this).animate({
      opacity:1.0,
    },100);
  });

  $('.carousel').slick({
    dots: true,
    infinite: true,
    fade: true,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    cssEase: 'linear'
  });

  // $('.zoom').click(function(){
  //   var winW = $(window).width();
  //   if(winW <400)return
  //   const imgSrc=$(this).attr('src');
  //   $('#zooming').attr('src',imgSrc);
  //   $('#zoomback').fadeIn();
  //   return false
  // });
  $(window).scroll(function(){
    var scrollAnimationElm=document.querySelectorAll('.scroll-up,.scroll-left,.scroll-right,.zoomIn,.whiteline-box,.whiteline-box2');
    var scrollanimationFunc=function(){
      for(var i=0;i<scrollAnimationElm.length;i++){
        var triggermargin=100;
        if(window.innerHeight>scrollAnimationElm[i].getBoundingClientRect().top+triggermargin){
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load',scrollanimationFunc);
    window.addEventListener('scroll',scrollanimationFunc);
  });


  $('#zoomback').click(function(){
    $(this).fadeOut();
  });


  $('a[href^="#"').click(function(){
    const speed=500;
    const href=$(this).attr('href');
    let $target;
    if(href=='#'){
      $target=$('html');
    }
    else{
      $target=$(href);
    }
    const position=$target.offset().top;
    $('html,body').animate({'scrollTop':position},1000,'swing');
    return false;

  });
//2回目もフェードインさせるためには？
  $(window).scroll(function(){
    const scrollAmount=$(window).scrollTop();
    const windowHeight=$(window).height();
    $('section').each(function(){
      const position=$(this).offset().top;
      if(scrollAmount > position-windowHeight+100){
        $(this).addClass('fade-in')
      }
    });
  });

});

const backBtn=document.getElementById('back-btn');

window.addEventListener('scroll',function(){
  const scrollValue=this.document.scrollingElement.scrollTop;

  if(scrollValue >=100){
    backBtn.style.display='inline';
  }

  else{
    $('#back-btn').fadeOut();
  }
});

const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
   } else{
    entries[j].target.classList.remove('active');
   }
  }
 });
 observer.observe(targets[i]);
};

document.querySelectorAll('.left').forEach(elm => {
	elm.onclick = function () {
		let div = this.parentNode.querySelector('.p-review_box');
		div.scrollLeft -= (div.clientWidth / 2);
	};
});
document.querySelectorAll('.right').forEach(elm => {
	elm.onclick = function () {
		let div = this.parentNode.querySelector('.p-review_box');
		div.scrollLeft += (div.clientWidth / 2);
	};
});

$(function(){
  $(".openbtn").click(function(){
    $(this).toggleClass('active');
    $(".sp-menu").toggleClass('active');
  });
});

$(function(){
  $(".sp-link").click(function(){
    $(".openbtn").removeClass('active');
    $(".sp-menu").removeClass('active');
  });
});

$('.p-button_box a').click(function(){//c-buttonあるいは海、くらげ、建物をクリック
 $('#image > img').attr('src',$(this).attr('href'))//ul外にあるp要素に囲まれたimgのsrcを取得して、そこにhrefの情報を入れる。
  .attr('alt',$(this).text());//altには
  return false;
});
