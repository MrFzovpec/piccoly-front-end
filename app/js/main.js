var swiper = new Swiper('#swiper-container_1', {
    slidesPerView: 2,
    autoplay: {
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_1',
        prevEl: '#swiper-button-prev_1',
    },
    breakpoints: {
        1023: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        },
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        }
    }
});
var swiper_1 = new Swiper('#swiper-container_2', {
    slidesPerView: 2,
    autoplay: {
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_2',
        prevEl: '#swiper-button-prev_2',
    },
    breakpoints: {
        1023: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        },
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
    autoplay: {
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_3',
        prevEl: '#swiper-button-prev_3',
    },
    breakpoints: {
        1023: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        },
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        }
    }
});
var swiper_3 = new Swiper('#swiper-container_4', {
    slidesPerView: 2,
    autoplay: {
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#swiper-button-next_4',
        prevEl: '#swiper-button-prev_4',
    },
    breakpoints: {
        1023: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        },
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 45
        }
    }
});

var swiper_5 = new Swiper('#slider_3', {
    slidesPerView: 3,
    autoplay: {
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
            spaceBetween: 45
        }
    }
});
var swiper_6 = new Swiper('#swiper-container_5', {
    slidesPerView: 4,
    autoplay: {
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
    autoplay: {
        delay: 2000
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '#big_swiper_next',
        prevEl: '.swiper-button-prev_big',
    },
});


//mobile
$(document).ready(function() {
    $('.open__mobile__menu').click(function() {
        $('.mobile-menu').toggle()
    })
    $('.mobile-menu__close').click(function() {
        $('.mobile-menu').toggle()
    })

    $('.open-filters').click(function() {
        $('.select-brown').toggle()
        $('.open-filters').toggle()
    })
})

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        800: {
            autoplay: {
                delay: 4000,
            }
        },
        640: {

            slidesPerView: 2

        }
    },

});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '#swiper-button-next_gallery',
        prevEl: '#swiper-button-prev_gallery',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
    breakpoints: {
        800: {
            autoplay: {
                delay: 4000,
            }
        }
    },
});
