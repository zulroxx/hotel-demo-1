/**
 * Builds a hotlinked Unsplash CDN URL from a photo id.
 * Only the stable `images.unsplash.com/photo-<id>` pattern is used —
 * `source.unsplash.com` is deprecated and never referenced here.
 */
export const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
