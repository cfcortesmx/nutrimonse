# 🎨 Guía de Personalización - Nutrimonse

## 🎯 Personalizaciones Rápidas (5 minutos)

### 1. Cambiar Colores de Marca

**Archivo**: `tailwind.config.js` (líneas 7-37)

```javascript
colors: {
  primary: {
    // Rosa - Color principal (CTAs, enlaces, acentos)
    50: '#fef2f3',   // Muy claro
    500: '#e74c64',  // Principal ⬅️ CAMBIAR AQUÍ
    600: '#d42f4e',  // Hover
    900: '#7e1e39',  // Muy oscuro
  },
  secondary: {
    // Verde - Color secundario
    500: '#22c55e',  // Principal ⬅️ CAMBIAR AQUÍ
  }
}
```

**Generador recomendado**: https://uicolors.app/create

### 2. Cambiar Tipografías

**Archivo**: `tailwind.config.js` (líneas 39-42)

```javascript
fontFamily: {
  display: ['"Playfair Display"', 'serif'],  // Títulos
  sans: ['Poppins', 'system-ui', 'sans-serif'], // Texto
}
```

**Archivo**: `index.html` (línea 25)

```html
<link
  href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

### 3. Actualizar Información de Contacto

**WhatsApp** - Buscar y reemplazar en `index.html`:

- `+523312345678` → Tu número
- `+52XXXXXXXXXX` → Tu número

**Email** - Buscar y reemplazar:

- `hola@nutrimonse.com` → Tu email

**Teléfono**:

- Línea 485 en `index.html`

### 4. Actualizar Ubicaciones

**Archivo**: `index.html` (líneas 465-508)

```html
<!-- Ubicación 1 -->
<h3>📍 Guadalajara</h3>
<p>Av. Principal #123, Col. Centro<br />Guadalajara, Jalisco</p>
```

**También actualizar JSON-LD** (líneas 605-641):

```json
"address": [
  {
    "streetAddress": "TU DIRECCIÓN",
    "addressLocality": "TU CIUDAD",
    "addressRegion": "TU ESTADO"
  }
]
```

### 5. Cambiar Testimonios

**Archivo**: `index.html` (líneas 372-444)

Reemplaza:

- Nombre
- Ciudad
- Texto del testimonio
- Emoji del avatar (opcional: usa foto real)

## 🎨 Personalizaciones Avanzadas

### Animaciones GSAP

**Archivo**: `src/main.js`

**Cambiar velocidad de animaciones**:

```javascript
// Línea 105 - Hero title
gsap.from('.hero-title', {
  duration: 1, // ⬅️ Ajustar duración
  ease: 'power3.out', // ⬅️ Cambiar easing
});
```

**Tipos de easing disponibles**:

- `power1.out` - Suave
- `power3.out` - Medio
- `elastic.out` - Rebote
- `back.out` - Retroceso

**Documentación**: https://gsap.com/docs/v3/Eases

### Swiper (Carrusel de Testimonios)

**Archivo**: `src/main.js` (línea 232)

```javascript
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  autoplay: {
    delay: 5000, // ⬅️ Milisegundos entre slides
  },
  speed: 600, // ⬅️ Velocidad de transición
});
```

### Smooth Scroll con Lenis

**Archivo**: `src/main.js` (línea 28)

```javascript
const lenis = new Lenis({
  duration: 1.2, // ⬅️ Duración del scroll (segundos)
  smoothWheel: true, // ⬅️ Desactivar para scroll normal
});
```

## 🖼️ Gestión de Imágenes

### Estructura Recomendada

```
public/assets/
├── hero.jpg              # 1920x1080 (WebP)
├── about.jpg             # 800x800 (WebP)
├── og-image.jpg          # 1200x630 (JPG/PNG)
├── favicon.svg           # SVG
└── gallery/
    ├── 1.jpg             # 1200x900 (WebP)
    ├── 1-thumb.jpg       # 400x300 (WebP)
    └── ...
```

### Convertir a WebP

**Con Squoosh CLI**:

```bash
npm install -g @squoosh/cli
squoosh-cli --webp auto public/assets/*.jpg
```

**Con ImageMagick**:

```bash
brew install imagemagick  # macOS
magick convert input.jpg -quality 85 output.webp
```

**Online**: https://squoosh.app

### Generar Thumbnails

```bash
# Con ImageMagick
magick convert imagen.jpg -resize 400x300^ -gravity center -extent 400x300 thumb.jpg
```

### Lazy Loading

Las imágenes con clase `.lozad` se cargan automáticamente cuando entran en viewport.

```html
<img class="lozad" data-src="/assets/imagen.jpg" alt="Descripción" />
```

## 📝 Contenido Editable

### Secciones del Sitio

1. **Hero** (líneas 58-107)
   - Título principal
   - Subtítulo
   - CTAs
   - Contadores

2. **Servicios** (líneas 112-176)
   - 3 tarjetas de servicios
   - Cada una con: emoji, título, descripción, features

3. **Sobre Mí** (líneas 181-226)
   - Texto bio
   - Certificaciones
   - Imagen

4. **Testimonios** (líneas 231-318)
   - Swiper con 3+ testimonios
   - Agregar más duplicando slides

5. **FAQ** (líneas 327-393)
   - Preguntas frecuentes
   - Acordeón interactivo

6. **Galería** (líneas 398-422)
   - PhotoSwipe lightbox
   - 4+ imágenes

7. **Ubicaciones** (líneas 427-471)
   - 2 ubicaciones
   - Horarios

8. **Contacto** (líneas 476-585)
   - Formulario
   - Información de contacto

### Agregar Nueva Sección

**1. En `index.html`**:

```html
<section id="nueva-seccion" class="section-padding bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title">Título</h2>
    <p class="section-subtitle">Subtítulo</p>
    <!-- Tu contenido -->
  </div>
</section>
```

**2. En navbar**:

```html
<li><a href="#nueva-seccion">Nueva Sección</a></li>
```

**3. Animar con GSAP** (opcional):

```javascript
// En src/main.js
gsap.from('#nueva-seccion', {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: '#nueva-seccion',
    start: 'top 80%',
  },
});
```

## 🎨 Estilos Personalizados

### Crear Componente Custom

**En `src/style.css`**:

```css
@layer components {
  .mi-boton-custom {
    @apply px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 
           text-white rounded-full font-bold shadow-lg 
           hover:shadow-2xl hover:scale-105 transition-all;
  }
}
```

**Usar en HTML**:

```html
<button class="mi-boton-custom">Click Aquí</button>
```

### Crear Animación Custom

**En `src/style.css`**:

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
```

**Usar en HTML**:

```html
<div class="floating">🍓</div>
```

## 🔧 Configuraciones Específicas

### Desactivar Smooth Scroll

**En `src/main.js`**, comenta las líneas 28-47:

```javascript
// const lenis = new Lenis({ ... });
// function raf(time) { ... }
// requestAnimationFrame(raf);
```

### Cambiar Velocidad de Parallax

**En `src/main.js`** (línea 124):

```javascript
gsap.to('.parallax-bg', {
  yPercent: 30,  // ⬅️ Ajustar velocidad (mayor = más rápido)
  scrollTrigger: { ... }
});
```

### Personalizar Validación de Formulario

**En `src/main.js`** (líneas 279-330):

```javascript
validator.addField('#nuevo-campo', [
  {
    rule: 'required',
    errorMessage: 'Campo requerido',
  },
  {
    rule: 'minLength',
    value: 5,
    errorMessage: 'Mínimo 5 caracteres',
  },
]);
```

## 📱 Responsive Design

### Breakpoints de Tailwind

- `sm:` → ≥ 640px (móvil horizontal)
- `md:` → ≥ 768px (tablet)
- `lg:` → ≥ 1024px (laptop)
- `xl:` → ≥ 1280px (desktop)
- `2xl:` → ≥ 1536px (pantallas grandes)

### Ejemplo de Uso

```html
<div class="text-sm md:text-base lg:text-lg">Texto responsive</div>
```

## 🚀 Performance Tips

### 1. Preload de Recursos Críticos

**En `index.html` `<head>`**:

```html
<link rel="preload" as="image" href="/assets/hero.webp" />
<link rel="preload" as="font" href="/fonts/poppins.woff2" type="font/woff2" crossorigin />
```

### 2. Defer Scripts No Críticos

```html
<script defer src="/analytics.js"></script>
```

### 3. Optimizar Tailwind Build

Ya configurado en `vite.config.js` - purga CSS automática.

### 4. Code Splitting

Vite lo hace automáticamente. Revisa en `vite.config.js` (línea 9):

```javascript
manualChunks: {
  vendor: ['gsap', '@studio-freight/lenis', 'swiper'],
  utils: ['lozad', 'dayjs', 'clipboard']
}
```

## 🎯 Checklist de Personalización

- [ ] Colores de marca actualizados
- [ ] Fuentes actualizadas
- [ ] Logo/Favicon reemplazado
- [ ] Información de contacto actualizada
- [ ] Ubicaciones y horarios correctos
- [ ] Testimonios reales agregados
- [ ] Imágenes reales subidas y optimizadas
- [ ] FAQs personalizadas
- [ ] Servicios descritos correctamente
- [ ] Bio "Sobre Mí" escrita
- [ ] Formulario conectado (Formspree/Netlify)
- [ ] WhatsApp link funcional
- [ ] Schema.org JSON-LD actualizado
- [ ] Meta tags (OG, Twitter) personalizados
- [ ] Analytics instalado (opcional)

---

**¿Necesitas ayuda?** Revisa la documentación de cada librería en `RESOURCES.md`
