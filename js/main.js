jQuery(function ($) {

    $('.centered').each(function (e) {
        $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
    });

    $(window).resize(function () {
        $('.centered').each(function (e) {
            $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
        });
    });

//scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
          }, 1000);
              return false;
      }
    }
  });
});
    //contact form
    var form = $('.contact-form');
    form.submit(function () {
        $this = $(this);
        $.post($(this).attr('action'), function (data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });


    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });
});


//fade in of my name

$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  console.log

  if (scroll >= 694) {
    $('.line').addClass("animated bounceInright");
  } else {
    $('.line').removeClass("animated bounceInright");
  }
 });

$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 700) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("transparent");
    }

});

//modal
$('#myModal').modal('show')


//jumper icons

//foto de perfil

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 800) {
    $('.profile').addClass("animated bounce");
  } else {
    $('.profile').removeClass("animated bounce");
  }
 });

 $(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 800) {
    $('.line').addClass("animated bounceInright");
  } else {
    $('.line').removeClass("animated bounceInright");
  }
 });

 //skills

 $(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 2297) {
    $('.line').addClass("animated bounceInright");
  } else {
    $('.line').removeClass("animated bounceInright");
  }
 });

//algunos  trabajos

 $(document).scroll(function() {
  var scroll = $(this).scrollTop();
  console.log(scroll);

  if (scroll >= 905) {

    $('.line').addClass("animated bounceInRight");
  } else {
    $('.line').removeClass("animated bounceInRight");
  }
 });

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 920) {
    $('.view').addClass("animated pulse");
  } else {
    $('.view').removeClass("animated pulse");
  }
 });


//blog


//contacto

 $(document).scroll(function() {
  var scroll = $(this).scrollTop();
  
  if (scroll >= 2378) {
    console.log(scroll);
    $('.line-white').addClass("animated bounceInRight");
  } else {
    $('.line-white').removeClass("animated bounceInRight");
  }
 });

 //Servicios
 $(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 2350) {
    $('.saltar').addClass("animated bounce");
  } else {
    $('.saltar').removeClass("animated bounce");
  }
 });


