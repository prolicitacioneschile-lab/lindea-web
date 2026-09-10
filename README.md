# Lindea Propiedades — sitio web

Sitio corporativo de una página construido con **Vite + React + Tailwind CSS**.
Todo el contenido editable vive en un solo archivo, para que puedas cambiar
textos, contacto y propiedades sin tocar el código de la aplicación.

---

## 1. Cómo ejecutar el proyecto localmente

Necesitas **Node.js 18 o superior** (descárgalo en https://nodejs.org).
En una terminal, dentro de la carpeta del proyecto:

```bash
npm install      # instala dependencias (solo la primera vez)
npm run dev      # levanta el sitio en modo desarrollo
```

Abre la dirección que aparece (tipo `http://localhost:5173`). Al guardar un
archivo, el sitio se recarga solo.

Versión final optimizada:

```bash
npm run build    # crea la carpeta dist/ lista para publicar
npm run preview  # opcional: revisa esa versión localmente
```

---

## 2. Cómo editar textos

**Casi todo el contenido está en `src/data/site.js`.** Ábrelo, busca la sección
(`hero`, `services`, `faq`…), cambia el texto entre comillas y guarda.

- Título principal → `hero` → `title`
- Respuestas de preguntas frecuentes → `faq` → `a`
- Teléfono / Instagram → `contact` (ver punto 6)

No borres comillas ni comas. Si algo se rompe, deshaz el cambio.

---

## 3. Cómo cambiar las fotografías

Las imágenes van en **`public/images/`**.

1. Copia tu foto ahí, por ejemplo `public/images/hero.jpg`.
2. **Foto del hero:** en `src/components/Hero.jsx` busca el bloque con clase
   `img-ph` y reemplázalo por:
   ```jsx
   <img src="/images/hero.jpg" alt="Departamento luminoso" className="h-full w-full object-cover" />
   ```
3. **Logo:** reemplaza `public/logo.png` por tu logo (mismo nombre).

Usa fotos horizontales, buena luz, `.jpg` o `.webp`, bajo ~400 KB.

---

## 4. Cómo agregar propiedades

El catálogo está en **`src/data/properties.js`** (hoy vacío → el sitio muestra
"Próximamente..."). Agrega un objeto dentro de los corchetes; hay un ejemplo
comentado en el archivo:

```js
{
  id: "nunoa-01",
  titulo: "Departamento en Ñuñoa",
  comuna: "Ñuñoa",
  precioMensual: 650000,      // solo el número
  gastosComunes: 90000,
  dormitorios: 2,
  banos: 2,
  estacionamiento: 1,          // 0 si no incluye
  superficie: 62,              // m²
  descripcion: "Cocina equipada, cerca del metro.",
  imagenes: ["/images/nunoa-01.jpg"],
}
```

Al agregar la primera, la sección "Busco arriendo" pasa de "Próximamente" a
mostrar tarjetas, cada una con su botón **Consultar por WhatsApp**.

---

## 5. Cómo funcionan los formularios

El formulario **no necesita servidor ni pagos mensuales.** Al enviarlo, abre
WhatsApp con un mensaje ya redactado (nombre, teléfono, correo, comuna…) hacia
tu número; lo recibes como una conversación normal.

Si más adelante prefieres recibirlos por correo (ej. https://formspree.io, plan
gratuito): en `src/components/ContactForm.jsx`, dentro de `submit()`, reemplaza
la línea `window.open(...)` por un `fetch` a tu URL de Formspree. La validación
ya está lista y no cambia.

---

## 6. Cómo modificar WhatsApp e Instagram

Todo en `src/data/site.js`, sección `contact`:

```js
export const contact = {
  whatsappNumber: "56930801241",       // solo dígitos, con código país (56)
  whatsappDisplay: "+56 9 3080 1241",  // como se muestra
  instagramUser: "lindea_propiedades",
  instagramUrl: "https://instagram.com/lindea_propiedades",
};
```

Al cambiar `whatsappNumber` se actualizan el botón flotante, los botones de
contacto, el formulario y todos los enlaces.

---

## 7. Cómo subirla a GitHub

1. Crea cuenta en https://github.com y un repositorio nuevo vacío (`lindea-web`).
2. En la terminal:

```bash
git init
git add .
git commit -m "Sitio Lindea Propiedades"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/lindea-web.git
git push -u origin main
```

`node_modules` y `dist` no se suben (excluidos en `.gitignore`).

---

## 8. Cómo desplegarla en Vercel

1. Entra a https://vercel.com con tu cuenta de GitHub.
2. **Add New → Project** y elige `lindea-web`.
3. Vercel detecta Vite. Deja los valores por defecto:
   - Framework: **Vite** · Build: `npm run build` · Output: `dist`
4. **Deploy**. En un minuto tendrás una URL tipo `lindea-web.vercel.app`.

Cada `git push` vuelve a publicar solo. (En Netlify es idéntico: Build
`npm run build`, Publish `dist`.)

---

## 9. Cómo conectar un dominio .cl

1. Compra el dominio en https://nic.cl.
2. En Vercel: **Settings → Domains → Add**, escribe `lindea.cl`.
3. Vercel te muestra los registros DNS: un registro **A** a la IP indicada, o un
   **CNAME** a `cname.vercel-dns.com`.
4. Agrega esos registros en el panel de NIC.cl.
5. La propagación tarda de minutos a horas; el HTTPS se emite automáticamente.

---

## Estructura

```
lindea/
├── index.html               → título, metadata SEO, fuentes
├── src/
│   ├── data/site.js         → ★ TODO el contenido editable
│   ├── data/properties.js   → ★ catálogo de propiedades
│   ├── components/          → header, hero, faq, contacto…
│   ├── lib/whatsapp.js      → arma los enlaces de WhatsApp
│   ├── App.jsx              → orden de las secciones
│   └── index.css           → paleta y estilos base
├── public/logo.png          → logo (reemplazable)
└── public/images/           → ★ tus fotografías
```

---

## Coherencia legal

Los textos y FAQ siguen el criterio del mandato y el contrato: la administración
**no** garantiza el pago del arrendatario, el servicio y las facultades se
acuerdan **por escrito**, el contrato se celebra entre propietario y
arrendatario, y el administrador no figura como arrendador ni garante. Mantén
ese criterio si editas estos textos.
