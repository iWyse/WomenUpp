$('.nav-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('nav-btn__active');
});

$(document).ready(function(){
    $('.nav-btn').click(function(){
      $('.header-nav__ul').toggleClass('active');
      })
  });

$(document).ready(function(){
    $('.header-nav__item').click(function(){
      $('.header-nav__ul').removeClass('active');
      })
  });




