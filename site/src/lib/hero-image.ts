import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { HeroImage } from '@/components/hero-1';

const sizes = '(max-width: 72rem) 100vw, 72rem';

/** Prépare une photo de src/assets pour le bloc Hero : WebP responsive, comme <Image>. */
export async function imageHero(src: ImageMetadata, alt: string): Promise<HeroImage> {
  const img = await getImage({ src, widths: [720, 1152, 1600], sizes, format: 'webp' });
  return {
    src: img.src,
    srcSet: img.srcSet.attribute,
    sizes,
    width: Number(img.attributes.width),
    height: Number(img.attributes.height),
    alt,
  };
}
