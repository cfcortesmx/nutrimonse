# 🚀 Guía Rápida de Inicio - Nutrimonse

## ✅ Checklist de Configuración

### 1. Instalación y Desarrollo

```bash
# Ya completado ✅
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor se abrirá automáticamente en `http://localhost:3000`

### 2. Personalización Inmediata

#### 📝 Textos y Contenido

Edita `index.html` y reemplaza:

- **Nombre y descripción** de servicios
- **Testimonios** (nombre, foto emoji, texto)
- **FAQs** (preguntas y respuestas)
- **Información de contacto**
- **Ubicaciones** (direcciones reales)

#### 🎨 Colores y Marca

Edita `tailwind.config.js` líneas 7-40 para ajustar la paleta de colores.

#### 📱 WhatsApp

En `index.html`, busca y reemplaza:

- `+523312345678` → Tu número real
- `+52XXXXXXXXXX` → Tu número real

#### 📧 Email

Busca y reemplaza en `index.html`:

- `hola@nutrimonse.com` → Tu email real

### 3. Imágenes a Reemplazar

```
public/assets/
├── about-placeholder.jpg → Foto profesional de la nutrióloga
├── og-image.jpg → Imagen para redes sociales (1200x630px)
├── pattern.svg → Patrón de fondo (opcional modificar)
└── gallery/
    ├── 1.jpg, 2.jpg, 3.jpg, 4.jpg → Fotos reales
    └── 1-thumb.jpg, 2-thumb.jpg... → Miniaturas (400x300px)
```

**Recomendación**: Convierte imágenes a WebP para mejor performance.

### 4. Configurar Formulario de Contacto

#### Opción A: Formspree (Recomendado - Gratis)

1. Regístrate en [Formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Obtén tu Form ID
4. En `src/main.js` línea 340, descomenta y agrega:

```javascript
fetch('https://formspree.io/f/TU_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: {
    Accept: 'application/json',
  },
}).then((response) => {
  if (response.ok) {
    MicroModal.show('modal-success');
    contactForm.reset();
  }
});
```

#### Opción B: Netlify Forms

1. En `index.html` línea 523, agrega al `<form>`:

```html
<form id="contact-form" name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- resto del formulario -->
</form>
```

2. Deploy a Netlify (ver sección 6)

### 5. SEO y Metadatos

Edita `index.html` y actualiza:

- **Line 5-6**: Description y keywords
- **Line 9-13**: Open Graph tags (título, descripción, URL)
- **Line 15-19**: Twitter Cards
- **Line 605-641**: Schema.org JSON-LD (direcciones, teléfonos, horarios)

### 6. Deploy a Producción

#### Opción A: Vercel (Más Rápido)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

#### Opción B: Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

#### Opción C: Cloudflare Pages

1. Push tu código a GitHub
2. Ve a [Cloudflare Pages](https://pages.cloudflare.com)
3. Conecta tu repositorio
4. Configuración:
   - Build command: `npm run build`
   - Output directory: `dist`

### 7. Analytics (Opcional pero Recomendado)

#### Plausible Analytics (GDPR-Friendly, sin cookies)

1. Regístrate en [Plausible.io](https://plausible.io)
2. Agrega el script en `index.html` antes de `</head>`:

```html
<script defer data-domain="tudominio.com" src="https://plausible.io/js/script.js"></script>
```

### 8. Optimización de Imágenes

```bash
# Instalar herramientas
npm install -g @squoosh/cli

# Convertir JPG a WebP
squoosh-cli --webp auto public/assets/*.jpg

# O usa herramientas online:
# - squoosh.app
# - tinypng.com
```

### 9. Testing Pre-Deploy

```bash
# Build local
npm run build

# Preview del build
npm run preview

# Verificar:
# ✅ Todas las imágenes cargan
# ✅ Animaciones funcionan
# ✅ Formulario valida
# ✅ Enlaces de WhatsApp funcionan
# ✅ Responsive en mobile
```

### 10. Post-Deploy Checklist

- [ ] Dominio configurado y apuntando
- [ ] SSL/HTTPS activo
- [ ] Formulario de contacto probado
- [ ] WhatsApp deep-link funciona
- [ ] Analytics instalado
- [ ] Search Console verificado
- [ ] Open Graph preview (Facebook Debugger)
- [ ] Lighthouse score > 90

## 🎯 Próximos Pasos Opcionales

### A. Blog/Artículos

Considera agregar:

- Astro + Content Collections
- WordPress Headless
- Notion API

### B. Calendario de Citas

Integraciones:

- Calendly
- Cal.com
- Acuity Scheduling

### C. CRM y Automatización

- HubSpot (gratis)
- Mailchimp (email marketing)
- Zapier (automatizaciones)

### D. PWA (Progressive Web App)

```bash
npm install -D vite-plugin-pwa
```

Agrega en `vite.config.js`:

```javascript
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: 'Nutrimonse',
        short_name: 'Nutrimonse',
        theme_color: '#e74c64',
      },
    }),
  ],
});
```

## 📞 Soporte

Si necesitas ayuda:

1. Revisa la documentación de cada librería (enlaces en README.md)
2. Verifica la consola del navegador (F12) para errores
3. Usa las DevTools de Vite para debug

## 🎉 ¡Listo!

Tu landing page está configurada con todas las mejores prácticas:

- ⚡ Performance optimizada
- ♿ Accesibilidad WCAG
- 📱 Fully responsive
- 🎨 Animaciones fluidas
- 📊 SEO optimizado
- 🔒 HTTPS ready
- 🚀 CDN optimizado

**Siguiente paso**: `npm run dev` y comienza a personalizar 🍓
