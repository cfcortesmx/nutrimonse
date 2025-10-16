# Nutrimonse 🍓

Landing page profesional para Nutrimonse - Nutrición especializada durante el embarazo.

## 🚀 Características

- ⚡ **Vite** - Dev server ultra rápido y build optimizado
- 🎨 **Tailwind CSS** - Framework CSS con plugins typography y forms
- 🎬 **GSAP + ScrollTrigger** - Animaciones fluidas y profesionales
- 🖱️ **Lenis** - Smooth scroll premium
- 🎠 **Swiper** - Carrusel de testimonios responsive
- 🖼️ **PhotoSwipe** - Galería lightbox accesible
- 📦 **Lozad** - Lazy loading optimizado
- ✅ **JustValidate** - Validación de formularios
- 📱 **IMask** - Máscaras de input (teléfono)
- 🎯 **Micromodal** - Modales accesibles
- 📋 **ClipboardJS** - Copiar direcciones
- 📅 **Day.js** - Formateo de fechas

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo (puerto 3000)
- `npm run build` - Genera build optimizado en `/dist`
- `npm run preview` - Preview del build de producción
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea código con Prettier

## 📁 Estructura del Proyecto

```
nutrimonse/
├── src/
│   ├── main.js          # JavaScript principal
│   └── style.css        # Estilos con Tailwind
├── assets/              # Imágenes, iconos, etc.
│   ├── gallery/         # Imágenes de galería
│   └── ...
├── index.html           # HTML principal
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
├── .eslintrc.json       # Configuración de ESLint
├── .prettierrc.json     # Configuración de Prettier
└── package.json         # Dependencias del proyecto
```

## 🎨 Paleta de Colores

- **Primary (Rosa)**: `#e74c64` - Para CTAs principales y acentos
- **Secondary (Verde)**: `#22c55e` - Para elementos secundarios
- **Neutral**: Escala de grises para texto y fondos

## 🔧 Configuración

### Formulario de Contacto

El formulario está listo para integrarse con:

- **Formspree**: Descomenta el código en `src/main.js` línea 340
- **Getform**: Similar a Formspree
- **Netlify Forms**: Agrega `netlify` al atributo del form

```html
<!-- Para Netlify Forms -->
<form id="contact-form" name="contact" method="POST" data-netlify="true"></form>
```

### Analytics

Para integrar analytics sin cookies (GDPR-friendly):

1. **Plausible**: Agrega el script en `<head>`
2. **Umami**: Similar a Plausible

### Google Fonts

Las fuentes están preconfiguradas:

- **Playfair Display** - Para títulos
- **Poppins** - Para texto general

## 📱 WhatsApp Integration

Actualiza el enlace de WhatsApp en el HTML:

```html
<a href="https://wa.me/52XXXXXXXXXX?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"></a>
```

## 🖼️ Imágenes

### Optimización Recomendada

1. **Formato**: Convierte a WebP/AVIF con Squoosh
2. **Responsive**: Usa `<picture>` + `srcset`
3. **Hero**: Preload de imagen principal
4. **Galería**: Genera thumbnails (thumb.jpg)

### Directorios

```
assets/
├── hero.jpg             # Imagen hero principal
├── about.jpg            # Foto de la nutrióloga
├── og-image.jpg         # Open Graph (1200x630)
├── favicon.svg          # Favicon
└── gallery/
    ├── 1.jpg            # Imagen full
    ├── 1-thumb.jpg      # Thumbnail
    └── ...
```

## 🚀 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Cloudflare Pages

1. Conecta tu repositorio Git
2. Build command: `npm run build`
3. Output directory: `dist`

## 📊 SEO

El proyecto incluye:

- ✅ Meta tags optimizados
- ✅ Open Graph (Facebook, Twitter)
- ✅ Schema.org JSON-LD (LocalBusiness)
- ✅ Favicon y manifest
- ✅ Sitemap (generar con plugin)
- ✅ robots.txt

## ♿ Accesibilidad

- Navegación por teclado
- ARIA labels
- Contraste WCAG AA
- Modales accesibles (Micromodal)
- Lightbox accesible (PhotoSwipe)

## 📄 Licencia

© 2025 Nutrimonse. Todos los derechos reservados.

## 🤝 Soporte

Para preguntas o soporte:

- 📧 Email: hola@nutrimonse.com
- 💬 WhatsApp: +52 33 1234 5678

---

Hecho con 💚 y 🍓
