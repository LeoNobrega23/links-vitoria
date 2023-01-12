//Button

 var btn = document.getElementById('btn')
 var galery = document.getElementById('swiper')
 btn.addEventListener('click', showGalery)
 function showGalery() {
     if (swiper.style.display === 'none') {
         swiper.style.display = 'block'
     } else {
         swiper.style.display = 'none'
     }
 };



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
