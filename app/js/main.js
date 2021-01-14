$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "14px",
        spacing: "5px",
        ratedFill: "#01BA57",
      });

      $('.burger__btn').on('click', function(){
        $('.burger__btn').toggleClass('burger__btn--active');
        $('.header__nav').toggleClass('header__nav--active');
        $('.header__top-phone').toggleClass('header__top-phone--active');
    });
});