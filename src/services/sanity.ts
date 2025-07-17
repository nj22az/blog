import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'hqpjl36z',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: { asset: { _ref: string } } | string) {
  return builder.image(source);
}