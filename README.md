# Cómo publicar Kalan como página web real

Esta guía asume que **no sabes programar** y que nunca has usado GitHub ni Vercel. Vas a usar solo el navegador — nada de instalar programas ni escribir comandos.

Tiempo estimado: 20-30 minutos la primera vez.

---

## Paso 1 — Consigue tu llave de la IA (Anthropic)

Esto es lo que le permite a Kalan analizar documentos de verdad. Tiene un costo por uso (no es gratis, pero es barato por cada análisis).

1. Ve a **https://console.anthropic.com** y crea una cuenta.
2. En el menú, busca **"API Keys"** y crea una llave nueva. Cópiala y guárdala en un lugar seguro (no la compartas, no la subas a ningún lado público).
3. En **"Billing"**, agrega una forma de pago y carga un saldo inicial pequeño (con 5-10 USD es más que suficiente para probar).

---

## Paso 2 — Sube el código a GitHub (así lo va a leer Vercel)

GitHub es donde vive el código. Es gratis.

1. Ve a **https://github.com** y crea una cuenta (si no tienes una).
2. Da clic en el botón verde **"New"** (o el símbolo "+") para crear un repositorio nuevo.
3. Ponle de nombre `kalan-web`, déjalo en "Public" o "Private" (cualquiera funciona), y da clic en **"Create repository"**.
4. En la página del repositorio nuevo, busca el enlace que dice algo como **"uploading an existing file"**.
5. Arrastra ahí TODOS los archivos y carpetas de la carpeta `kalan-web` que te compartí (incluyendo las carpetas `src`, `api` y `public` completas).
6. Baja hasta abajo y da clic en **"Commit changes"**.

---

## Paso 3 — Publica el sitio con Vercel

Vercel es el servicio que va a hacer que la página exista en internet. También es gratis para este tipo de proyecto.

1. Ve a **https://vercel.com** y crea una cuenta — elige la opción de **"Continuar con GitHub"**, así quedan conectados automáticamente.
2. Da clic en **"Add New..." → "Project"**.
3. Busca tu repositorio `kalan-web` en la lista y da clic en **"Import"**.
4. Antes de darle a "Deploy", busca la sección **"Environment Variables"**:
   - En el campo de nombre escribe: `ANTHROPIC_API_KEY`
   - En el campo de valor pega la llave que guardaste en el Paso 1
   - Da clic en **"Add"**
5. Ahora sí, da clic en **"Deploy"**. Espera 1-2 minutos.
6. Cuando termine, Vercel te da un link como `kalan-web.vercel.app` — esa ya es tu página real, funcionando, para cualquiera que la abra.

---

## Paso 4 — Pruébala

Abre el link que te dio Vercel desde tu celular. Prueba:
- El botón "Usar contrato de ejemplo" (debe darte un resumen real)
- "Verificar vigencia" con la identificación de ejemplo
- Agrégala a tu pantalla de inicio (en Chrome/Safari: menú → "Agregar a pantalla de inicio") — debería verse como una app normal, con su ícono.

---

## Paso 5 (opcional) — Ponle tu propio dominio

Si más adelante quieres que se vea como `kalan.mx` en vez de `kalan-web.vercel.app`:
1. Compra el dominio en cualquier sitio (Namecheap, GoDaddy, etc.)
2. En Vercel, ve a tu proyecto → **"Settings" → "Domains"**
3. Escribe tu dominio y sigue las instrucciones que te da Vercel (vas a tener que entrar al sitio donde compraste el dominio y cambiar unos datos llamados "DNS" — Vercel te dice exactamente cuáles).

---

## Si algo no funciona

- **"Falta configurar la llave ANTHROPIC_API_KEY"** → Regresa al Paso 3, punto 4. Es probable que la llave no se haya guardado bien o le falte texto.
- **La página carga pero los botones de análisis no responden** → Revisa en Anthropic Console que tu cuenta tenga saldo (Billing).
- **Subiste un cambio y no se ve reflejado** → Cada vez que subas un archivo nuevo a GitHub, Vercel vuelve a publicar automáticamente en 1-2 minutos. No necesitas hacer nada más.

Cuando quieras cambiar algo del texto, los pasos de un trámite, o los colores, dile a Claude qué quieres ajustar, y te doy el archivo actualizado — solo vuelves a subirlo a GitHub (Paso 2) y Vercel lo publica solo.
