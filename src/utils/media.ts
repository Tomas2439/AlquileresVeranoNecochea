import type { ImageMetadata } from 'astro';

const allAssets = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true }
);

/**
 * Devuelve las imágenes optimizadas de una subcarpeta de src/assets/,
 * ordenadas alfabéticamente por nombre de archivo (la primera es la portada).
 */
export function getFolderImages(folder: string): ImageMetadata[] {
  const prefix = `/src/assets/${folder}/`;

  return Object.entries(allAssets)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, 'es'))
    .map(([, mod]) => mod.default);
}
