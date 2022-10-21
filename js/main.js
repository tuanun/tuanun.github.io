// Слайдер в начале сайта
$(function () {
	$('.rev_slider').slick({
		autoplay: true,
        autoplaySpeed: 2750,
        speed: 800,
        fade: true,
        cssEase: 'linear'
	})
});
// Конец слайдера в начале сайта





// Слайдер в специльный предложениях
$(function () {
	$('.rev_slider_for-special').slick({
		  autoplay: true,
        autoplaySpeed: 3200,
        speed: 700,
        infinite: true,
	})
});
// Конец слайдера в специальных предложениях


/*Медиазапрос на ширину дисплея для показа количества слайдов в отзывах*/

var screen = window.innerWidth;
console.log(screen);
if (screen < 1094) {


$(function () {
	$('.rev_slider_for-comments').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 900,
	})
});



} else{


$(function () {
	$('.rev_slider_for-comments').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 900,
	})
});


}
/*Конец медиазапроса на ширину дисплея для показа количества слайдов в отзывах*/



// Слайдер в коментариях
$(function () {
	$('.rev_slider_for-comments').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 900,
	})
});
// Конец слайдера в коментариях




// Анимация меню
var head = $('.menu-basic'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 40  ) {
		head.addClass('out');
	} else {
		head.removeClass('out');
	}
	scrollPrev = scrolled;
});
// Конец анимации маню




// Анимация для списка адаптивного меню меню
var sausage = $('.menu-basic_ul'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 40  ) {
		sausage.addClass('out');
	} else {
		sausage.removeClass('out');
	}
	scrollPrev = scrolled;
});
// Конец анимации для списка адаптивного меню маню




// Анимация для кнопки адаптивного меню меню
var burger = $('.burger'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 40  ) {
		burger.addClass('out');
	} else {
		burger.removeClass('out');
	}
	scrollPrev = scrolled;
});
// Конец анимации для кнопки адаптивного меню маню




// Анимация для полосок кнопки адаптивного меню меню
var burger2 = $('.burger_line'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 40  ) {
		burger2.addClass('out');
	} else {
		burger2.removeClass('out');
	}
	scrollPrev = scrolled;
});
// Конец анимации для полосок кнопки адаптивного меню маню




// Анимация кнопки якоря

var header = $('.go_top'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 700 ) {
		header.addClass('outt');

	 // if (window.pageYOffset > window.innerHeight) {
	 // 	header.addClass('outt');

	} else {
		header.removeClass('outt');
	}
	scrollPrev = scrolled;
});

// Конец анимации кнопки якоря



// Плавность прокрутки кнопки якоря

$(document).ready(function() {


   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });


});

// Конец плавности прокрутки кнопки якоря








// Плагин livereload
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')
/*Конец плагина*/


// Бургер меню
	let menu = document.getElementsByClassName('menu-basic-buttons')[0];
	function toggleMenu() {
		if (menu.className === "menu-basic-buttons") {
			menu.className += "open";
		} 
		else {
			menu.className = "menu-basic-buttons";
		}
	}
let animblock = document.animationblock('stop')[0];
	function animstart() {
		if (animblock.className === "stop") {
			animblock.className += "open";
		}
		else {
			animblock.className = "stop" ;
		}
	}
// Конец бургер меню
