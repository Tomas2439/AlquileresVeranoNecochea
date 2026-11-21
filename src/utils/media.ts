import type { ImageMetadata } from 'astro';

const allImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true }
);

const allVideos = import.meta.glob<string>(
  '/src/assets/**/*.{mp4,webm,mov,MP4,WEBM,MOV}',
  { eager: true, query: '?url', import: 'default' }
);

/**
 * Devuelve las imágenes optimizadas de una subcarpeta de src/assets/,
 * ordenadas naturalmente por nombre de archivo (la primera es la portada).
 */
export function getFolderImages(folder: string): ImageMetadata[] {
  const prefix = `/src/assets/${folder}/`;

  return Object.entries(allImages)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true }))
    .map(([, mod]) => mod.default);
}

/**
 * Devuelve las URLs de los videos (.mp4, .webm, .mov) dentro de src/assets/<folder>/,
 * ordenados naturalmente por nombre de archivo.
 */
export function getFolderVideos(folder: string): string[] {
  const prefix = `/src/assets/${folder}/`;

  return Object.entries(allVideos)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true }))
    .map(([, url]) => url);
}
