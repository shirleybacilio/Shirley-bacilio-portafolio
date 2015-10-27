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

    if (scroll >= 700) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("transparent");
    }

});

//modal
$('#myModal').modal('show')
//jumper icons

 $(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 1450) {
    $('.saltar').addClass("animated bounce");
  } else {
    $('.saltar').removeClass("animated bounce");
  }
 });

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 750) {
    $('.profile').addClass("animated bounce");
  } else {
    $('.profile').removeClass("animated bounce");
  }
 });

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >=  748) {
    $('.line').addClass("animated bounceInRight");
  } else {
    $('.line').removeClass("animated bounceInRigth");
  }
 });

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 1200) {
    $('.line').addClass("animated bounceInRight");
  } else {
    $('.line').removeClass("animated bounceInRigth");
  }
 });

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >=1450) {
    $('.line').addClass("animated bounceInRight");
  } else {
    $('.line').removeClass("animated bounceInRigth");
  }
 });

$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 1170) {
    $('.line', '.line-white').addClass("animated bounceInRight");
  } else {
    $('.line', '.line-white').removeClass("animated bounceInRigth");
  }
 });