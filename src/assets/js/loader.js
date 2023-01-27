// function preloader_fade() {
//   $("#preloader").fadeOut('slow');
// }

// $(document).ready(function() {
//   window.setTimeout("preloader_fade();", 300); //call fade in .5 seconds
// }
// )


// function preloader_fade() {
//   document.getElementById("preloader").style.opacity = 0;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(preloader_fade, 500);
// });

// Open Sub Menu
$('.drp_btn').click(function(){
  $(this).siblings('.sub_menu').slideToggle();
})



// Preloader JS

function preloader_fade() {
  $("#preloader").fadeOut('slow');
}

$(document).ready(function() {
  window.setTimeout("preloader_fade();", 500); //call fade in .5 seconds
}
)

// Scrool-top
$(document).ready(function() {
  var toTop = $('.go_top');
  toTop.on('click', function() {
    $('html, body').animate({scrollTop: $('html, body').offset().top,}, 400);
  });

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 750) {
      $(toTop).css("opacity", "1");

    } else {
      $(toTop).css("opacity", "0");
    }

  });

});


// Fix Header Js
$(window).scroll(function(){
  if ($(window).scrollTop() >= 250) {
      $('header').addClass('fix_style');
  }
  else {
      $('header').removeClass('fix_style');
  }
  if ($(window).scrollTop() >= 260) {
      $('header').addClass('fixed');
  }
  else {
      $('header').removeClass('fixed');
  }
});


$('#testimonial_slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  smartSpeed: 2500,
  dots: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})



// Close btn on click

$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    if($(this).children('span').children('.ico_menu').hasClass('icofont-navigation-menu')) {
      $(this).children('span').children('.ico_menu').removeClass('icofont-navigation-menu').addClass('icofont-close');
    } else {
      $(this).children('span').children('.ico_menu').removeClass('icofont-close').addClass('icofont-navigation-menu');
    }
  });
});

(function() {
  $('.toggle-wrap').on('click', function() {
    $(this).toggleClass('active');
    $('aside').animate({width: 'toggle'}, 200);
  });
})();


