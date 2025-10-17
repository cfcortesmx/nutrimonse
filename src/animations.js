// 🎨 Animaciones y Efectos Parallax para Nutrimonse
// Agregar al final de main.js

// ============================================
// PARALLAX EFFECTS
// ============================================

// Solo aplicar parallax en desktop
if (window.innerWidth > 768) {
  
  // 1. Círculos decorativos en "Sobre Especialista" - movimiento lento
  const decorativeCircles = document.querySelectorAll('.parallax-circle');
  
  decorativeCircles.forEach((circle, index) => {
    const speed = circle.dataset.speed || 0.3;
    
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

// ============================================
// SCROLL ANIMATIONS (Mobile & Desktop)
// ============================================

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
gsap.utils.toArray('.stagger-item').forEach((container) => {
  const items = container.querySelectorAll('.stagger-child');
  
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
});

// ============================================
// ENHANCED HOVERS
// ============================================

// Service cards hover enhancement
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

// ============================================
// REDUCE MOTION SUPPORT
// ============================================

// Detectar preferencia del usuario por movimiento reducido
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Desactivar todas las animaciones GSAP
  gsap.globalTimeline.clear();
  
  // Aplicar estilos estáticos
  document.querySelectorAll('.parallax-circle, .fruit-decoration, .floating-circle').forEach(el => {
    el.style.transform = 'none';
  });
}

console.log('✨ Parallax y animaciones inicializadas');
