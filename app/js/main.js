var swiper = new Swiper('#swiper-container_1', {
    slidesPerView: 2,
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_1',
        prevEl: '#swiper-button-prev_1',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        }
    }
});
var swiper_1 = new Swiper('#swiper-container_2', {
    slidesPerView: 2,
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_2',
        prevEl: '#swiper-button-prev_2',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        }
    }
});
var swiper_2 = new Swiper('#swiper-container_3', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_3',
        prevEl: '#swiper-button-prev_3',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        }
    }
});
var swiper_3 = new Swiper('#swiper-container_4', {
    slidesPerView: 2,
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_4',
        prevEl: '#swiper-button-prev_4',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        }
    }
});

var swiper_5 = new Swiper('#slider_3', {
    slidesPerView: 3,
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#slider_3_next',
        prevEl: '#slider_3_prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 40
        }
    }
});
var swiper_6 = new Swiper('#swiper-container_5', {
    slidesPerView: 4,
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_5',
        prevEl: '#swiper-button-prev_5',
    },

});
var swiper_big = new Swiper('#big_swiper', {
    slidesPerView: 1,
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#big_swiper_next',
        prevEl: '.swiper-button-prev_big',
    },
});
