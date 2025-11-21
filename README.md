# Baliza DGT - Shopify Theme

Tema de Shopify para tienda de Balizas V-16 homologadas DGT.

## Estructura del Tema

```
├── layout/           # Layouts principales
│   └── theme.liquid  # Layout base del tema
├── templates/        # Templates de páginas
│   ├── index.json    # Página de inicio
│   ├── product.json  # Página de producto
│   ├── cart.json     # Página del carrito
│   └── page.*.json   # Páginas específicas
├── sections/         # Secciones reutilizables
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   └── ...
├── snippets/         # Fragmentos de código pequeños
│   └── meta-tags.liquid
├── assets/           # CSS, JavaScript e imágenes
│   ├── theme.css
│   ├── theme.js
│   └── vendor.js
├── config/           # Configuración del tema
│   ├── settings_schema.json
│   └── settings_data.json
└── locales/          # Traducciones
    └── es.json
```

## Instalación en Shopify

### Método 1: Subir desde GitHub

1. Haz push de este repositorio a GitHub
2. En tu admin de Shopify, ve a **Tienda online > Temas**
3. Haz clic en **Añadir tema > Conectar desde GitHub**
4. Autoriza Shopify a acceder a tu repositorio
5. Selecciona el repositorio y la rama
6. Haz clic en **Conectar**

### Método 2: Subir ZIP

1. Comprime todo el contenido de este proyecto en un archivo ZIP
2. En tu admin de Shopify, ve a **Tienda online > Temas**
3. Haz clic en **Añadir tema > Subir archivo ZIP**
4. Selecciona el archivo ZIP y súbelo

### Método 3: Shopify CLI (Recomendado para desarrollo)

```bash
# Instalar Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Autenticarse
shopify auth login

# Subir el tema
shopify theme push

# Desarrollo en vivo
shopify theme dev
```

## Configuración Inicial

### 1. Menús de Navegación

Ve a **Tienda online > Navegación** y crea los siguientes menús:

**main-menu:**
- Inicio → /
- Producto → /collections/all
- Normativa → /pages/normativa
- FAQ → /pages/faq
- Contacto → /pages/contact

**footer:**
- Inicio → /
- Producto → /collections/all
- Normativa → /pages/normativa
- FAQ → /pages/faq
- Contacto → /pages/contact

**legal:**
- Política de Privacidad → /pages/privacy
- Términos y Condiciones → /pages/terms
- Política de Cookies → /pages/cookies
- Envíos y Devoluciones → /pages/shipping

### 2. Crear Producto

Ve a **Productos > Añadir producto** y crea:

**Baliza V-16 DGT Homologada**
- Handle/URL: `baliza-v16-dgt`
- Precio: 19.99€ (o tu precio)
- Descripción: Dispositivo de preseñalización de peligro V-16...
- Imágenes: Sube imágenes del producto

### 3. Crear Páginas

Ve a **Tienda online > Páginas** y crea las siguientes páginas:

| Nombre | Handle/URL | Template |
|--------|-----------|----------|
| Contacto | `contact` | `page.contact` |
| Preguntas Frecuentes | `faq` | `page.faq` |
| Normativa DGT | `normativa` | `page.normativa` |
| Política de Privacidad | `privacy` | `page.privacy` |
| Términos y Condiciones | `terms` | `page.terms` |
| Política de Cookies | `cookies` | `page.cookies` |
| Envíos y Devoluciones | `shipping` | `page.shipping` |

**IMPORTANTE:** Al crear cada página, selecciona el template correspondiente en el menú desplegable de la derecha.

### 4. Configurar el Tema

Ve a **Tienda online > Temas > Personalizar** y configura:

- Logo y colores de marca
- Información de contacto en el footer
- Secciones de la página de inicio
- Configuración de checkout

## Características

- ✅ Diseño responsive (móvil, tablet, escritorio)
- ✅ Optimizado para conversión
- ✅ SEO-friendly
- ✅ Integración completa con Shopify
- ✅ Carrito de compras funcional
- ✅ Checkout nativo de Shopify
- ✅ Páginas legales incluidas
- ✅ Multiidioma preparado

## Personalización

### Colores

Edita los colores en `assets/theme.css`:

```css
:root {
  --color-red-600: #dc2626;
  --color-orange-600: #ea580c;
}
```

### Textos

Los textos se pueden editar:
1. Directamente en el personalizador de Shopify
2. En los archivos de secciones (`.liquid`)
3. En el archivo de traducciones `locales/es.json`

## Guía Rápida de Configuración Post-Instalación

### Paso 1: Crear las Páginas
En **Tienda online > Páginas**, crea estas 7 páginas y asigna sus templates:

1. Contacto (`contact`) → Template: `page.contact`
2. FAQ (`faq`) → Template: `page.faq`
3. Normativa DGT (`normativa`) → Template: `page.normativa`
4. Privacidad (`privacy`) → Template: `page.privacy`
5. Términos (`terms`) → Template: `page.terms`
6. Cookies (`cookies`) → Template: `page.cookies`
7. Envíos (`shipping`) → Template: `page.shipping`

### Paso 2: Configurar Menús
En **Tienda online > Navegación**:

**Menu principal** (handle: `main-menu`):
- Inicio → /
- Producto → /collections/all
- Normativa → /pages/normativa
- FAQ → /pages/faq
- Contacto → /pages/contact

**Footer** (handle: `footer`):
- Inicio → /
- Producto → /collections/all
- Normativa → /pages/normativa
- FAQ → /pages/faq
- Contacto → /pages/contact

**Legal** (handle: `legal`):
- Política de Privacidad → /pages/privacy
- Términos y Condiciones → /pages/terms
- Política de Cookies → /pages/cookies
- Envíos y Devoluciones → /pages/shipping

### Paso 3: Crear Producto
En **Productos > Añadir producto**:
- Nombre: Baliza V-16 DGT Homologada
- Precio: 29,99€
- SKU: BALIZA-V16-001
- Descripción completa del producto
- Sube imágenes de alta calidad

### Paso 4: Activar el Tema
En **Tienda online > Temas**, haz clic en **Publicar** en tu nuevo tema.

## Soporte

Para soporte técnico o preguntas:
- Email: info@balizadgt.net
- Documentación Shopify: https://shopify.dev/docs/themes

## Licencia

Copyright © 2025 BalizaDGT.net - Todos los derechos reservados.
