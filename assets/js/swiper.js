const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    autoplay: {
      delay: 5000,
    },

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        scale: 1,
        stretch: 100,
        depth: 600,
        modifier: 2,
        slideShadows: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });