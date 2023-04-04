setTimeout(function () {
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".body-wrap").style.display = "flex";
  }, 2500);
document.addEventListener("DOMContentLoaded", () => {
  //popup1
	let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.open-popup');
  let closePopupButton = document.querySelector('.close-popup');
  
  openPopupButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          popupBg.classList.add('active');
          popup.classList.add('active');
      })
  });
  
  closePopupButton.addEventListener('click',() => {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
  });
  
  document.addEventListener('click', (e) => {
      if(e.target === popupBg) {
          popupBg.classList.remove('active');
          popup.classList.remove('active');
      }
  });
  document.addEventListener('keydown', function(e) {
   if (e.key === 'Escape') {
   //ваша функция закрытия окна
     popupBg.classList.remove('active');
     popup.classList.remove('active');
   }
   });
//popup3
let popupBg3 = document.querySelector('.popup__bg3');
let popup3 = document.querySelector('.popup3');
let openPopupButtons3 = document.querySelectorAll('.nav__call');
let closePopupButton3 = document.querySelector('.close-popup3');

openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg3.classList.add('active');
        popup3.classList.add('active');
    })
});

closePopupButton3.addEventListener('click',() => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg3) {
        popupBg3.classList.remove('active');
        popup3.classList.remove('active');
    }
});
document.addEventListener('keydown', function(e) {
   if (e.key === 'Escape') {
   //ваша функция закрытия окна
     popupBg3.classList.remove('active');
     popup3.classList.remove('active');
   }
   });
});

document.addEventListener('DOMContentLoaded', function(){
   const swiper = new Swiper('.swiper1', {
       navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
         slidesPerView: "auto",
       spaceBetween: 30,
       breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          spaceBetween: 20
        }
      }
   });
   var swiper2 = new Swiper(".mySwiper3", {
      lazy: true,
      pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    });
    var swiper3 = new Swiper(".mySwiper9", {
      spaceBetween: 20,
      slidesPerView: 4,
      pagination: {
      el: ".swiper-pagination",
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 0,
          loop: true,
          slidesPerView: 1
        },
        576: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        // when window width is >= 480px
        992: {
          spaceBetween: 20,
          slidesPerView: 4
        }
      }
    });
    var swiper4 = new Swiper(".mySwiper3", {
      lazy: true,
      pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    });
    
    const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
});
document.addEventListener("DOMContentLoaded", () => {
   let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
// svg
$(function(){
  jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
  
      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');
  
          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
  
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');
          
          // Check if the viewport is set, else we gonna set it if we can.
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
  
          // Replace image with new SVG
          $img.replaceWith($svg);
  
      }, 'xml');
  
  });
});
