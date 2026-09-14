import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: 'apj45rqg',
  dataset: 'production', // Default dataset name for Sanity
  useCdn: false, // `false` provides instant live updates when you publish
  apiVersion: '2024-01-01', // Stable API version
});

const builder = createImageUrlBuilder(client);

/**
 * Helper function to generate builder URLs for Sanity images
 * @param {object} source - The Sanity image asset source object
 * @returns {object} The image URL builder instance
 */
export function urlFor(source) {
  return builder.image(source).format('webp');
}
