// Importar estilos
import './style.css';

// Importar librerías
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
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
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#value-proposition',
    start: 'top 70%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.value-pillar', {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.15,
  ease: 'power2.out',
  clearProps: 'all',
  scrollTrigger: {
    trigger: '#value-proposition',
    start: 'top 60%',
    toggleActions: 'play none none reverse',
  },
});

// Sobre la Especialista section animations
gsap.from('.about-photo', {
  opacity: 0,
  x: -60,
  duration: 1.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#sobre-especialista',
    start: 'top 65%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.about-content', {
  opacity: 0,
  x: 60,
  duration: 1.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#sobre-especialista',
    start: 'top 65%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.credential-card', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power2.out',
  clearProps: 'all',
  scrollTrigger: {
    trigger: '.credentials-grid',
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
});

// Áreas de Especialización animations - Benefits Cluster
gsap.from('#areas-especializacion .section-title', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#areas-especializacion',
    start: 'top 70%',
    toggleActions: 'play none none reverse',
  },
});

// Animación de la imagen central
gsap.from('#areas-especializacion .aspect-square', {
  opacity: 0,
  scale: 0.9,
  duration: 1.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#areas-especializacion',
    start: 'top 60%',
    toggleActions: 'play none none reverse',
  },
});

// Animación de los benefit items (stagger por columna)
gsap.from('.benefit-item', {
  opacity: 0,
  x: (index) => (index < 3 ? -40 : 40), // Izquierda negativo, derecha positivo
  duration: 0.8,
  stagger: 0.15,
  ease: 'power2.out',
  clearProps: 'all',
  scrollTrigger: {
    trigger: '#areas-especializacion',
    start: 'top 55%',
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
// 8. FORMULARIO DE CONTACTO - WhatsApp HÍBRIDO
// ==========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const contacto = document.getElementById('contacto').value.trim();
    const ubicacion = document.getElementById('ubicacion').value;
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validación básica
    if (!nombre || !contacto || !ubicacion || !mensaje) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    // Mapear ubicación a texto legible
    const ubicacionTexto = {
      'guadalajara': 'Guadalajara',
      'colima': 'Colima',
      'virtual': 'Consulta Virtual'
    };
    
    // Construir mensaje mejorado para WhatsApp
    const whatsappMessage = `Hola, soy *${nombre}* 👋

📱 Mi contacto: ${contacto}
📍 Ubicación preferida: ${ubicacionTexto[ubicacion] || ubicacion}

💬 Mensaje:
${mensaje}

Me gustaría agendar una consulta de nutrición. ¿Cuándo tienes disponibilidad?`;
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número de WhatsApp (reemplaza con el número real)
    const phoneNumber = '523312345678';
    
    // Abrir WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Reset form después de enviar
    setTimeout(() => {
      contactForm.reset();
    }, 500);
    
    console.log('✅ Formulario enviado a WhatsApp');
  });
  
  console.log('📱 Formulario híbrido WhatsApp inicializado');
}

// ==========================================
// 9. FAQ ACCORDION
// ==========================================
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    const isOpen = !answer.classList.contains('hidden');
    
    // Cerrar todos los demás
    document.querySelectorAll('.faq-answer').forEach(item => {
      item.classList.add('hidden');
    });
    document.querySelectorAll('.faq-icon').forEach(item => {
      item.classList.remove('rotate-180');
    });
    
    // Toggle el actual
    if (!isOpen) {
      answer.classList.remove('hidden');
      icon.classList.add('rotate-180');
      
      // Smooth scroll al item si es necesario
      setTimeout(() => {
        faqItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  });
});

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
// 13. CARRUSEL DE TESTIMONIOS
// ==========================================
const testimonialsCarousel = document.getElementById('testimonials-carousel');
const prevBtn = document.getElementById('testimonial-prev');
const nextBtn = document.getElementById('testimonial-next');
const indicators = document.querySelectorAll('.indicator');
const testimonialCards = document.querySelectorAll('.testimonial-card');

if (testimonialsCarousel && testimonialCards.length > 0) {
  let currentIndex = 0;
  let autoplayInterval;
  const autoplayDelay = 5000; // 5 segundos

  function showTestimonial(index) {
    // Remover clase active de todos
    testimonialCards.forEach(card => card.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Agregar clase active al actual
    if (testimonialCards[index]) {
      testimonialCards[index].classList.add('active');
    }
    if (indicators[index]) {
      indicators[index].classList.add('active');
    }

    currentIndex = index;
  }

  function nextTestimonial() {
    const nextIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(nextIndex);
  }

  function prevTestimonial() {
    const prevIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(prevIndex);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextTestimonial, autoplayDelay);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Controles manuales
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevTestimonial();
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextTestimonial();
      resetAutoplay();
    });
  }

  // Indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showTestimonial(index);
      resetAutoplay();
    });
  });

  // Pausar autoplay al hacer hover
  testimonialsCarousel.addEventListener('mouseenter', stopAutoplay);
  testimonialsCarousel.addEventListener('mouseleave', startAutoplay);

  // Iniciar autoplay
  startAutoplay();

  // Soporte para teclado
  document.addEventListener('keydown', (e) => {
    if (testimonialsCarousel && document.activeElement.closest('#testimonios')) {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
        resetAutoplay();
      }
    }
  });
}

// ==========================================
// 14. CONSOLE MESSAGE (Opcional)
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
// 15. ERROR HANDLING & FALLBACKS
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

// ==========================================
// 16. PARALLAX EFFECTS & ENHANCED ANIMATIONS
// ==========================================

// Solo aplicar parallax en desktop
if (window.innerWidth > 768) {
  
  // 1. Círculos decorativos en "Sobre Especialista" - movimiento lento
  const decorativeCircles = document.querySelectorAll('.parallax-circle');
  
  decorativeCircles.forEach((circle) => {
    const speed = parseFloat(circle.dataset.speed) || 0.3;
    
    gsap.to(circle, {
      y: -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: circle,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
  });

  // 2. SVG Frutas en Testimonios - parallax + respiración
  const fruits = document.querySelectorAll('.fruit-decoration');
  
  fruits.forEach(fruit => {
    // Parallax
    gsap.to(fruit, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '#testimonios',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });
    
    // Animación de respiración (scale pulse)
    gsap.to(fruit, {
      scale: 1.05,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  // 3. Badge de stats en Hero - floating animation
  const statsBadge = document.querySelector('.stats-badge');
  if (statsBadge) {
    gsap.to(statsBadge, {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }

  // 4. Círculos flotantes en Value Proposition
  const floatingCircles = document.querySelectorAll('.floating-circle');
  
  floatingCircles.forEach((circle, index) => {
    gsap.to(circle, {
      y: 20 + (index * 10),
      x: 10 - (index * 5),
      duration: 3 + (index * 0.5),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.3
    });
  });

  // 5. Decoración en Contacto - parallax sutil
  const contactDecorations = document.querySelectorAll('.contact-decoration');
  
  contactDecorations.forEach(deco => {
    gsap.to(deco, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#contacto',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  });
}

// ==========================================
// 17. SCROLL ANIMATIONS (Mobile & Desktop)
// ==========================================

// Fade in elements on scroll
gsap.utils.toArray('.fade-in-on-scroll').forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });
});

// Stagger animation for grid items
gsap.utils.toArray('.stagger-container').forEach((container) => {
  const items = container.querySelectorAll('.stagger-item');
  
  if (items.length > 0) {
    gsap.from(items, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }
});

// ==========================================
// 18. ENHANCED HOVERS
// ==========================================

// Service cards hover enhancement (semicírculo)
const serviceCards = document.querySelectorAll('.service-benefit-item');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.08,
      rotate: 2,
      duration: 0.3,
      ease: 'back.out(1.5)'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// ==========================================
// 19. REDUCE MOTION SUPPORT
// ==========================================

// Detectar preferencia del usuario por movimiento reducido
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Desactivar animaciones complejas pero mantener transiciones básicas
  const animatedElements = document.querySelectorAll('.parallax-circle, .fruit-decoration, .floating-circle');
  animatedElements.forEach(el => {
    el.style.transform = 'none';
    el.style.animation = 'none';
  });
  
  console.log('♿ Modo de movimiento reducido activado');
} else {
  console.log('✨ Parallax y animaciones inicializadas');
}

