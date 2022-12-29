//Button



function showGalery () {
    console.log('clicou')
    const galery = document.getElementById('swiper')
    if (galery.style.display === 'none') {
        galery.style.display = 'block'
    } else {
        galery.style.display = 'none'
    }
}


//Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 19,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });