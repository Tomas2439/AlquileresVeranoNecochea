# AVN – Alquiler de Verano Necochea

Landing page (Etapa 1) construida con Astro, Tailwind CSS y TypeScript.

## Comandos

```bash
npm install
npm run dev      # Servidor de desarrollo en http://localhost:4321
npm run build    # Compila la versión estática en dist/
npm run preview  # Previsualiza el build estático
```

## Cómo agregar fotos

Las imágenes se cargan automáticamente desde `src/assets/` con `import.meta.glob` y se optimizan con `<Image />` de `astro:assets` (en orden alfabético; la primera imagen de cada carpeta es la portada).

Carpetas disponibles:
- `src/assets/hero/` — Foto principal del hero (1 imagen)
- `src/assets/asilomar-1/` — Hasta 5 fotos
- `src/assets/asilomar-2/` — Hasta 5 fotos
- `src/assets/asiloparque-1/` — Hasta 5 fotos
- `src/assets/asiloparque-2/` — Hasta 5 fotos
- `src/assets/asilocentro/` — Hasta 5 fotos
- `src/assets/entorno/` — Fotos del entorno (sección Ubicación)

Formatos recomendados: `.webp` o `.jpg` optimizados (por ejemplo `01-portada.jpg`, `02-living.jpg`, etc.). Mientras una carpeta esté vacía, el sitio muestra un placeholder neutro.

## Cómo editar alojamientos

Editá `src/data/alojamientos.ts`:
- `ALOJAMIENTOS`: lista de unidades con `slug`, `nombre`, `capacidad` y el arreglo `fotosAlt` (un texto alternativo por foto, en el mismo orden que los archivos de la carpeta).
- `WHATSAPP_URL`, `INSTAGRAM_HANDLE` e `INSTAGRAM_URL`: enlaces de contacto.

## Dónde reemplazar el logo

El logo tipográfico actual vive en `src/components/LogoAvn.astro` (marcado con un comentario `TODO`) y se reutiliza en `Header.astro` y `Footer.astro`. Para usar el logo definitivo, reemplazá el contenido de `LogoAvn.astro` por el SVG o imagen final.

## Videos (opcional a futuro)

No guardar archivos de video en el repositorio. Para embeber un video de YouTube o Vimeo con carga diferida, usar `src/components/VideoEmbed.astro`.
