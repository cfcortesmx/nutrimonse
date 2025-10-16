// Importar estilos
import './style.css';

// Importar librerías
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import lozad from 'lozad';
import JustValidate from 'just-validate';
import IMask from 'imask';
import ClipboardJS from 'clipboard';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

// Configurar dayjs
dayjs.locale('es');

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. SMOOTH SCROLL CON LENIS
// ==========================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Sincronizar Lenis con GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ==========================================
// 2. NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Close mobile menu on link click
const mobileLinks = mobileMenu?.querySelectorAll('a');
mobileLinks?.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ==========================================
// 3. GSAP ANIMATIONS
// ==========================================

// Hero title animation - Más prominente
gsap.from('.hero-title', {
  opacity: 0,
  y: 60,
  duration: 1.2,
  delay: 0.1,
  ease: 'power3.out',
});

// Hero subtitle animation
gsap.from('.hero-subtitle', {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.4,
  ease: 'power3.out',
});

// Hero CTA animation
gsap.from('.hero-cta', {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.7,
  ease: 'power3.out',
});

// Hero image animation
gsap.from('.hero-image', {
  opacity: 0,
  x: 50,
  duration: 1.2,
  delay: 0.3,
  ease: 'power3.out',
});

// Value Proposition section animations
gsap.from('.value-prop-title', {
  opacity: 0,
  y: 40,
  duration: 1,
  scrollTrigger: {
    trigger: '#value-proposition',
    start: 'top 70%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.value-pillar', {
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#value-proposition',
    start: 'top 60%',
    toggleActions: 'play none none reverse',
  },
});

// Parallax background
gsap.to('.parallax-bg', {
  yPercent: 30,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

// Service cards animation
gsap.utils.toArray('.service-card').forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

// About section animation
gsap.from('.about-image', {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.about-image',
    start: 'top 70%',
    toggleActions: 'play none none reverse',
  },
});

// FAQ items stagger
gsap.from('.faq-item', {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.faq-item',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
});

// ==========================================
// 4. LAZY LOADING CON LOZAD
// ==========================================
const observer = lozad('.lozad', {
  loaded: (el) => {
    el.classList.add('animate-fade-in');
  },
});
observer.observe();

// ==========================================
// 5. SWIPER TESTIMONIOS
// ==========================================
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  modules: [Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 600,
});

// ==========================================
// 6. PHOTOSWIPE GALERÍA
// ==========================================
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
  paddingFn: (viewportSize) => {
    return {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30,
    };
  },
});

lightbox.init();

// ==========================================
// 7. FAQ ACCORDION
// ==========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Cerrar todos los demás items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').classList.add('hidden');
      }
    });

    // Toggle el item actual
    if (isActive) {
      item.classList.remove('active');
      answer.classList.add('hidden');
    } else {
      item.classList.add('active');
      answer.classList.remove('hidden');
    }
  });
});

// ==========================================
// 8. FORMULARIO DE CONTACTO
// ==========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const validator = new JustValidate('#contact-form', {
    errorFieldCssClass: 'border-red-500',
    errorLabelCssClass: 'text-red-500 text-sm mt-1',
    successFieldCssClass: 'border-green-500',
  });

  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'El nombre es requerido',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'El nombre debe tener al menos 3 caracteres',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'El email es requerido',
      },
      {
        rule: 'email',
        errorMessage: 'Ingresa un email válido',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'El teléfono es requerido',
      },
    ])
    .addField('#location', [
      {
        rule: 'required',
        errorMessage: 'Selecciona una ubicación',
      },
    ])
    .onSuccess((event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      console.log('Formulario enviado:', data);

      // Aquí puedes integrar con Formspree, Getform, o Netlify Forms
      // Ejemplo con Formspree:
      // fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Accept': 'application/json'
      //   }
      // }).then(response => {
      //   if (response.ok) {
      //     MicroModal.show('modal-success');
      //     contactForm.reset();
      //   }
      // });

      // Mostrar mensaje de éxito
      alert('¡Gracias por tu mensaje! 🎉\n\nNos pondremos en contacto contigo pronto para agendar tu consulta.');
      contactForm.reset();
    });

  // Máscara para teléfono
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    IMask(phoneInput, {
      mask: '+{52} 00 0000 0000',
      lazy: false,
    });
  }
}

// ==========================================
// 10. CLIPBOARD (COPIAR DIRECCIÓN)
// ==========================================
const clipboard = new ClipboardJS('.copy-address', {
  text: function (trigger) {
    return trigger.getAttribute('data-address');
  },
});

clipboard.on('success', function (e) {
  const originalText = e.trigger.textContent;
  e.trigger.textContent = '✓ Copiado!';
  e.trigger.classList.add('bg-green-500', 'text-white');

  setTimeout(() => {
    e.trigger.textContent = originalText;
    e.trigger.classList.remove('bg-green-500', 'text-white');
  }, 2000);

  e.clearSelection();
});

// ==========================================
// 11. SMOOTH SCROLL PARA ANCHORS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.2,
      });
    }
  });
});

// ==========================================
// 12. PERFORMANCE: PRELOAD CRITICAL IMAGES
// ==========================================
const heroImages = document.querySelectorAll('.hero-section img[data-src]');
heroImages.forEach((img) => {
  const src = img.getAttribute('data-src');
  if (src) {
    const preloadLink = document.createElement('link');
    preloadLink.href = src;
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);
  }
});

// ==========================================
// 13. CONSOLE MESSAGE (Opcional)
// ==========================================
console.log(
  '%c🍓 Nutrimonse',
  'color: #e74c64; font-size: 24px; font-weight: bold;'
);
console.log(
  '%cSitio desarrollado con amor y las mejores prácticas web 💚',
  'color: #22c55e; font-size: 14px;'
);

// ==========================================
// 14. ERROR HANDLING & FALLBACKS
// ==========================================
window.addEventListener('error', (e) => {
  console.error('Error detectado:', e.message);
});

// Service Worker registration (opcional para PWA)
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js').then(
//       (registration) => {
//         console.log('SW registrado:', registration);
//       },
//       (err) => {
//         console.log('SW falló:', err);
//       }
//     );
//   });
// }

// Export para uso en otros módulos si es necesario
export { lenis, gsap, ScrollTrigger };
