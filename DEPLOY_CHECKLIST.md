# ✅ Checklist de Deploy - Nutrimonse

## 🎯 Pre-Deploy (Desarrollo Local)

### Contenido

- [ ] Todos los textos personalizados (nombre, bio, servicios)
- [ ] Testimonios reales agregados
- [ ] FAQs respondidas
- [ ] Información de contacto actualizada (email, teléfono, WhatsApp)
- [ ] Ubicaciones y horarios correctos
- [ ] Links de redes sociales configurados

### Imágenes

- [ ] Todas las imágenes placeholder reemplazadas
- [ ] Imágenes optimizadas (WebP/AVIF)
- [ ] Thumbnails generados para galería
- [ ] Favicon.svg personalizado
- [ ] OG image creada (1200x630px)
- [ ] Hero image optimizada y con preload

### SEO

- [ ] Meta description personalizada
- [ ] Keywords relevantes
- [ ] Title tag optimizado
- [ ] Open Graph tags actualizados (Facebook)
- [ ] Twitter Cards configurados
- [ ] Schema.org JSON-LD completo (direcciones, horarios)
- [ ] Sitemap.xml generado
- [ ] robots.txt configurado

### Funcionalidad

- [ ] Formulario de contacto validando correctamente
- [ ] Servicio de formularios conectado (Formspree/Netlify/Getform)
- [ ] WhatsApp deep-link funcionando
- [ ] Botones "Copiar dirección" funcionando
- [ ] Smooth scroll activo
- [ ] Animaciones GSAP funcionando
- [ ] Lazy loading de imágenes activo
- [ ] FAQ accordion funcionando
- [ ] Carrusel de testimonios funcionando
- [ ] Galería PhotoSwipe funcionando
- [ ] Mobile menu funcionando

### Performance

- [ ] Build de producción generado (`npm run build`)
- [ ] Preview local exitoso (`npm run preview`)
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Imágenes < 200KB cada una
- [ ] CSS purgado (automático con Tailwind)
- [ ] JS minificado (automático con Vite)

### Testing

- [ ] Probado en Chrome
- [ ] Probado en Safari
- [ ] Probado en Firefox
- [ ] Probado en mobile (iOS)
- [ ] Probado en mobile (Android)
- [ ] Responsive en todas las resoluciones
- [ ] No hay errores en consola
- [ ] No hay warnings de accesibilidad

### Legal

- [ ] Aviso de Privacidad agregado
- [ ] Términos y Condiciones agregados
- [ ] Política de Cookies (si aplica)
- [ ] Cédula profesional visible en footer

## 🚀 Deploy

### Preparación

- [ ] Git repository inicializado
- [ ] `.gitignore` configurado
- [ ] Commit inicial creado
- [ ] Push a GitHub/GitLab/Bitbucket

### Dominio

- [ ] Dominio registrado
- [ ] DNS configurado
- [ ] SSL/TLS certificado activo (automático en Vercel/Netlify/Cloudflare)

### Hosting (Elegir uno)

#### Opción A: Vercel

- [ ] Cuenta creada en Vercel
- [ ] Proyecto conectado desde GitHub
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Deploy exitoso
- [ ] Dominio custom conectado

#### Opción B: Netlify

- [ ] Cuenta creada en Netlify
- [ ] Proyecto conectado desde GitHub
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Deploy exitoso
- [ ] Dominio custom conectado
- [ ] Netlify Forms configurado (si se usa)

#### Opción C: Cloudflare Pages

- [ ] Cuenta creada en Cloudflare
- [ ] Proyecto conectado desde GitHub
- [ ] Build command: `npm run build`
- [ ] Build output directory: `dist`
- [ ] Deploy exitoso
- [ ] Dominio custom conectado

### Variables de Entorno (si aplica)

- [ ] Formspree ID configurado
- [ ] Analytics ID configurado
- [ ] API keys en variables de entorno (no en código)

## 📊 Post-Deploy

### Verificación

- [ ] Sitio accesible en URL de producción
- [ ] HTTPS funcionando (candado verde)
- [ ] Todas las páginas cargan correctamente
- [ ] Formulario envía emails
- [ ] WhatsApp link redirige correctamente
- [ ] Imágenes cargan correctamente
- [ ] No hay errores 404
- [ ] Lighthouse score en producción > 90

### SEO

- [ ] Google Search Console configurado
- [ ] Sitemap.xml enviado a Search Console
- [ ] Bing Webmaster Tools configurado
- [ ] Schema.org validado (Google Rich Results Test)
- [ ] Open Graph validado (Facebook Debugger)
- [ ] Twitter Cards validadas (Twitter Validator)

### Analytics (Opcional)

- [ ] Plausible/Umami/Fathom instalado
- [ ] Código de tracking funcionando
- [ ] Goals/Events configurados
- [ ] Dashboard accesible

### Marketing

- [ ] Google My Business creado y verificado
- [ ] Perfil de Facebook/Instagram creado
- [ ] Botón de WhatsApp Business configurado
- [ ] Email signature con link al sitio
- [ ] Tarjetas de presentación con QR/URL

### Monitoreo

- [ ] Uptime monitor configurado (UptimeRobot, Pingdom)
- [ ] Alertas de downtime activas
- [ ] Google Analytics 4 (opcional)
- [ ] Heatmaps/Session recordings (Hotjar, opcional)

## 🔒 Seguridad

- [ ] No hay API keys hardcodeadas
- [ ] Variables sensibles en .env
- [ ] CORS configurado correctamente
- [ ] Formularios protegidos contra spam (honeypot/reCAPTCHA)
- [ ] Headers de seguridad configurados (CSP, X-Frame-Options)

## 📝 Documentación

- [ ] README.md actualizado con instrucciones
- [ ] Credenciales documentadas (Formspree, Analytics, etc.)
- [ ] Proceso de deploy documentado
- [ ] Contactos de soporte listados

## 🎉 Launch

### Pre-Lanzamiento (1 semana antes)

- [ ] Soft launch con amigos/familia
- [ ] Recopilar feedback
- [ ] Hacer ajustes finales
- [ ] Preparar posts de redes sociales

### Día del Lanzamiento

- [ ] Post en redes sociales
- [ ] Enviar email a lista de contactos
- [ ] Actualizar WhatsApp status
- [ ] Agregar link en bio de Instagram
- [ ] Enviar comunicado a medios locales (opcional)

### Post-Lanzamiento (primeras 2 semanas)

- [ ] Monitorear analytics diariamente
- [ ] Responder comentarios/mensajes
- [ ] Ajustar basado en feedback
- [ ] A/B testing de CTAs (opcional)
- [ ] Revisar y optimizar conversiones

## 📈 Mantenimiento Continuo

### Semanal

- [ ] Revisar analytics
- [ ] Responder mensajes del formulario
- [ ] Revisar errores en Search Console

### Mensual

- [ ] Lighthouse audit
- [ ] Revisar enlaces rotos
- [ ] Actualizar contenido (blog, testimonios)
- [ ] Revisar uptime/performance

### Trimestral

- [ ] Actualizar dependencias (`npm update`)
- [ ] Revisar y actualizar imágenes
- [ ] Auditoría de accesibilidad
- [ ] Backup completo del sitio

## 🆘 Troubleshooting

### Sitio no carga

1. Verificar DNS (puede tardar 24-48h)
2. Verificar build logs en hosting
3. Verificar `dist/` folder generado correctamente

### Formulario no funciona

1. Verificar Formspree ID
2. Verificar CORS settings
3. Revisar consola del navegador para errores
4. Probar con datos de prueba

### Imágenes no cargan

1. Verificar rutas (deben ser absolutas desde `/public`)
2. Verificar que imágenes estén en `public/assets`
3. Verificar formato de imagen soportado

### Lighthouse score bajo

1. Optimizar imágenes (WebP, tamaños correctos)
2. Minimizar JavaScript
3. Usar lazy loading
4. Preload recursos críticos
5. Eliminar recursos no usados

## 📞 Contactos Útiles

**Hosting**:

- Vercel Support: support@vercel.com
- Netlify Support: support@netlify.com
- Cloudflare Support: support.cloudflare.com

**Formularios**:

- Formspree: support@formspree.io
- Getform: support@getform.io

**Dominio**:

- (Tu registrador de dominio)

**Analytics**:

- (Tu servicio de analytics)

---

**Última revisión**: Antes de deploy
**Proyecto**: Nutrimonse Landing Page
**Status**: [ ] Ready to deploy | [ ] Needs work

🍓 ¡Éxito con tu lanzamiento!
