(function($){"use strict";$('a.page-scroll').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:($($anchor.attr('href')).offset().top-50)},1250,'easeInOutExpo');event.preventDefault();});$("body").on("input propertychange",".floating-label-form-group",function(e){$(this).toggleClass("floating-label-form-group-with-value",!!$(e.target).val());}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus");}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus");});$('.navbar-collapse ul li a').click(function(){$('.navbar-toggle:visible').click();});$(".about-carousel").owlCarousel({items:5,navigation:true,pagination:false,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],});$(".portfolio-carousel").owlCarousel({singleItem:true,navigation:true,pagination:false,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],autoHeight:true,mouseDrag:false,touchDrag:false,transitionStyle:"fadeUp"});$(".testimonials-carousel").owlCarousel({singleItem:true,navigation:true,pagination:false,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],autoHeight:true,mouseDrag:false,touchDrag:false,transitionStyle:"fadeUp"});$(".portfolio-gallery").owlCarousel({items:3,});$('.gallery-link').magnificPopup({type:'image',gallery:{enabled:true},image:{titleSrc:'title'}});$("header.video").background({source:{poster:"assets/img/bg-mobile-fallback.jpg",mp4:"assets/mp4/camera.mp4"}});$('body').scrollspy({target:'.navbar-fixed-top',offset:500})
var filterList={init:function(){$('#portfoliolist').mixitup({targetSelector:'.portfolio',filterSelector:'.filter',effects:['fade'],easing:'snap'});}};filterList.init();})(jQuery);var isPhoneDevice="ontouchstart"in document.documentElement;$(document).ready(function(){$(".portfolio-wrapper h3").each(function(index,element){var myWidth=$(this).width();var myHeight=$(this).height();var parentWidth=$(this).parent().width();var parentHeight=$(this).parent().height();$(this).css("margin-top",-(myHeight/4));$(this).css("margin-left",-(myWidth/2));$(this).css("left","50%");$(this).css("top","50%");});if(isPhoneDevice){}else{wow=new WOW({offset:50})
wow.init();}});