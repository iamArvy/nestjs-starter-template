export const DEFAULTS = {
  ITEMS_PER_PAGE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

export type Defaults = typeof DEFAULTS;
