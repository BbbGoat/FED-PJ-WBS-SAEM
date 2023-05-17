// 스와이퍼 커스텀
const swiper = new Swiper(".mySwiper2", {
    // Optional parameters
    direction: 'vertical',
    // slidesPerView: 3,
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
        //   hide: true,
        clickable: true,
    },
});


// 박스닫기
$(".nPay").click((e)=>{
    swiper.slideTo(0);
});
