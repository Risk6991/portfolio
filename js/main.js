"use strict";

const mySwiper = new Swiper(".swiper-container", {
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});

const revealSetting = {
    distance: "300px",
    origin: "left",
    viewFactor: "0.5",
};

ScrollReveal().reveal(".animate-right", revealSetting);
ScrollReveal().reveal(".headline", revealSetting);
