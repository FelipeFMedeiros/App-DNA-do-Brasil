/*! Fitness onboarding.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper('.swipernavonboarding', {
        slidesPerView: 1,
        spaceBetween: 0,
        disableOnInteraction: true,
        reverseDirection:false,
        noSwiping:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next-theme',
            prevEl: '.swiper-button-prev-theme',
        },
    });

    swiper.on('reachBeginning', function(){
       $('.swiper-button-prev-theme').hide();
    });
    swiper.on('fromEdge', function () {
       $('.swiper-button-prev-theme').show();
       $('.swiper-button-next-theme').show();
       $('.finish-btn').hide();
    });
    swiper.on('reachEnd', function(){
      $('.swiper-button-next-theme').hide();
      $('.finish-btn').show();
    });
});