


let swiper2 = null;

function applyBulletListeners() {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  const slides = document.querySelectorAll('.sec_2_slide');
  const container = document.querySelector('.sec_2_container');

  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      swiper2.slideTo(index);

      requestAnimationFrame(() => {
        const targetSlide = slides[index];
        const baseOffset = targetSlide.offsetLeft;
        const buffer = -20;

        container.style.transition = 'transform 0.4s ease';
        container.style.transform = `translateX(-${baseOffset + buffer}px)`;
      });

      swiper2.activeIndex = index;
      swiper2.updateSlidesClasses();
      swiper2.pagination.update();
    });
  });
}

function initSwiper2() {
  const wrapper = document.querySelector('.sec_2_wrapper');
  const container = document.querySelector('.sec_2_container');
  const slides = document.querySelectorAll('.sec_2_slide');
  const paginationEl = document.querySelector('.sec_2_pagination');

  const isMobile = window.innerWidth <= 1080;

  if (isMobile && !wrapper.classList.contains('swiper')) {
    wrapper.classList.add('swiper');
    container.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    swiper2 = new Swiper(".sec_2_wrapper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: false,
      pagination: {
        el: paginationEl,
        clickable: true,
      },
      on: {
        paginationRender: () => {
          applyBulletListeners();
        },
        paginationUpdate: () => {
          applyBulletListeners();
        }
      }
    });
  }

  else if (!isMobile && wrapper.classList.contains('swiper')) {
    if (swiper2) {
      swiper2.destroy(true, true);
      swiper2 = null;
    }

    wrapper.classList.remove('swiper');
    container.classList.remove('swiper-wrapper');
    slides.forEach(slide => slide.classList.remove('swiper-slide'));

    container.style.transform = '';
    container.style.transition = '';
  }
}

window.addEventListener('DOMContentLoaded', initSwiper2);
window.addEventListener('resize', initSwiper2);













  

// -----sec_1-------
let swiper4 = null;

function initSwiper4() {
  const wrapper = document.querySelector('.sec_4_wrapper');
  const container = document.querySelector('.sec_4_container');
  const slides = document.querySelectorAll('.sec_4_slide');
  const paginationEl = document.querySelector('.sec_4_pagination');
  const isMobile = window.innerWidth <= 1080;

  if (isMobile && !wrapper.classList.contains('swiper-initialized')) {
    wrapper.classList.add('swiper');
    container.classList.add('swiper-wrapper');
    container.style.width = 'max-content';

    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
      slide.style.flex = '0 0 65vw';
      slide.style.boxSizing = 'border-box';
      slide.style.margin = '0';

 
      if (slide.classList.contains('empty-slide')) {
        slide.style.opacity = '0';
        slide.style.width = '0';
        slide.style.pointerEvents = 'none';
      }
    });

    swiper4 = new Swiper(".sec_4_wrapper", {
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: false,
      pagination: {
        el: '.sec_4_pagination',
        clickable: true,
      },
      on: {
        slideChange: function () {
          const validSlides = document.querySelectorAll('.sec_4_slide:not(.empty-slide)');
          if (swiper4.activeIndex >= validSlides.length) {
            swiper4.slideTo(validSlides.length - 1);
          }
        }
      }
    });
  }

 
  else if (!isMobile && wrapper.classList.contains('swiper')) {
    if (swiper4) {
      swiper4.destroy(true, true);
      swiper4 = null;
    }

    wrapper.classList.remove('swiper');
    container.classList.remove('swiper-wrapper');
    container.style.width = '';
    slides.forEach(slide => {
      slide.classList.remove('swiper-slide');
      slide.style.flex = '';
      slide.style.boxSizing = '';
      slide.style.margin = '';
      slide.style.opacity = '';
      slide.style.width = '';
      slide.style.pointerEvents = '';
    });
  }
}

window.addEventListener('DOMContentLoaded', initSwiper4);
window.addEventListener('resize', initSwiper4);

// ------sec_4--

gsap.utils.toArray(".sec_3_slide").forEach((slide, i) => {
  gsap.from(slide, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section_3",
      start: "top 50%",
      toggleActions: "play none none none"
    }
  });
});



  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1425: {
        slidesPerView: 3,
      },
      875: {
        slidesPerView: 2,
        
      },
      0: {
        slidesPerView: 1,
      }
    }
    
  });

// ------sec_3-----

