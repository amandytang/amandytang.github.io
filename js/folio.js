$( document ).ready(function() {
  $('.slider').slick({
    arrows: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
  });

// Parallax animation
  var scene = document.getElementById('scene');

  var parallaxInstance = new Parallax(scene);

// Bubble Animation
  function initparticles() {
    bubbles();
  }

  function bubbles() {
   $.each($(".particletext.bubbles"), function(){
      var bubblecount = ($(this).width()/50)*10;
      for(var i = 0; i <= bubblecount; i++) {
         var size = ($.rnd(40,80)/10);
         $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
      }
   });
  }

  jQuery.rnd = function(m,n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor( Math.random() * (n - m + 1) ) + m;
  }

  initparticles();

// Check if element in viewport
  $.fn.isInViewport = function() {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
//TODO trigger porthole animation for small screens only

// Highlight active section in navigation
  if ($(window).scrollTop() === 0) {
    $('#home').addClass('active');
  }

  $(window).on('resize scroll', function() {
    if ($('#intro-text').isInViewport()) {
      $('#home').addClass('active');
      $('#projects').removeClass('active');
      $('#contact').removeClass('active');
      $('#about').removeClass('active');
    }
    if ($(window).scrollTop() !== 0 && $('.about-text').isInViewport()) {
      $('.about-text').addClass('animated fadeInUp');
      $('#home').removeClass('active');
      $('#projects').removeClass('active');
      $('#contact').removeClass('active');
      $('#about').addClass('active');
    }
    if ($('#cocanvas-thumb').isInViewport()) {
      $('#cocanvas-thumb').addClass('animated fadeInRight');
    }
    // if ($('#burning-thumb').isInViewport()) {
    //   $('#burning-airlines-thumb').addClass('animated fadeInLeft');
    //   $('#home').removeClass('active');
    //   $('#about').removeClass('active');
    //   $('#contact').removeClass('active');
    //   $('#projects').addClass('active');
    // }
    if ($('#origame-thumb').isInViewport()) {
      $('#origame-thumb').addClass('animated fadeInRight');
      $('#home').removeClass('active');
       $('#about').removeClass('active');
       $('#contact').removeClass('active');
       $('#projects').addClass('active');
    }
    if ($('#tictac-thumb').isInViewport()) {
      $('#tictac-thumb').addClass('animated fadeInRight');
    }
    if ($('#contact-heading').isInViewport()) {
      $('#home').removeClass('active');
      $('#about').removeClass('active');
      $('#projects').removeClass('active');
      $('#contact').addClass('active');
    }
  });

// Scroll to element on click
  $("#home").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, 1100);
  });
  $("#about").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#about-heading").offset().top - 70
      }, 1100);
  });
  $("#projects").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#projects-heading").offset().top - 70
      }, 1100);
  });

  $("#contact").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#contact-heading").offset().top - 70
      }, 1100);
  });
// Scroll button
  $(".scroll-icon").click(function(e) {
    $('html, body').animate({
        scrollTop: $("#about-heading").offset().top - 70
    }, 1100);
  });
// Initiate emoji switcher
  $(function() {
      $('.dynamo').dynamo()
  });

  $('.cocanvas-close').click(function(e) {
    e.preventDefault();
    $('#cocanvas-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#cocanvas-modal').removeClass('animated zoomOut');
      }, 550);

      $('.cocanvas-modal-overlay').fadeOut(200);
    });

  $('#cocanvas-thumb').click(function(e) {
    e.preventDefault();
    $('.cocanvas-modal-overlay').fadeIn(200);
    $('#cocanvas-modal').addClass('animated zoomIn');
  });
  //
  // $('.burning-close').click(function(e) {
  //   e.preventDefault();
  //   $('#burning-modal').addClass('animated zoomOut')
  //
  //     setTimeout( function () {
  //       $('#burning-modal').removeClass('animated zoomOut');
  //     }, 550);
  //
  //     $('.burning-modal-overlay').fadeOut(200);
  //   });
  //
  // $('#burning-thumb').click(function(e) {
  //   e.preventDefault();
  //   $('.burning-modal-overlay').fadeIn(200);
  //   $('#burning-modal').addClass('animated zoomIn');
  // });

  $('.origame-close').click(function(e) {
    e.preventDefault();
    $('#origame-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#origame-modal').removeClass('animated zoomOut');
      }, 550);

      $('.origame-modal-overlay').fadeOut(200);
    });

  $('#origame-thumb').click(function(e) {
    e.preventDefault();
    $('.origame-modal-overlay').fadeIn(200);
    $('#origame-modal').addClass('animated zoomIn');
  });


  //
  // $('.ph-close').click(function(e) {
  //   e.preventDefault();
  //   $('#ph-modal').addClass('animated zoomOut')
  //
  //     setTimeout( function () {
  //       $('#ph-modal').removeClass('animated zoomOut');
  //     }, 550);
  //
  //     $('.ph-modal-overlay').fadeOut(200);
  //   });
  //
  // $('#ph-thumb').click(function(e) {
  //   e.preventDefault();
  //   $('.ph-modal-overlay').fadeIn(200);
  //   $('#ph-modal').addClass('animated zoomIn');
  // });
  //

  $('.tictac-close').click(function(e) {
    e.preventDefault();
    $('#tictac-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#tictac-modal').removeClass('animated zoomOut');
      }, 550);

      $('.tictac-modal-overlay').fadeOut(200);
    });

  $('#tictac-thumb').click(function(e) {
    e.preventDefault();
    $('.tictac-modal-overlay').fadeIn(200);
    $('#tictac-modal').addClass('animated zoomIn');
  });

});
