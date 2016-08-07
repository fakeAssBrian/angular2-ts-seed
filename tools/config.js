export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_DEV = process.env.NODE_ENV === 'development';

export const SRC_DIR = 'src';
export const DIST_DIR = 'dist';

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT || IS_PROD ? 8080 : 3000;

export const HTML_METADATA = {
  lang: 'en',
  title: 'Angular2 TS Seed',
  description: 'A complete, yet simple, starter for Angular 2 using TypeScript.',
  baseUrl: '/',
  analytics: 'UA-71073175-1'
};


/**
 * Sorts package order. It should always be `['polyfills', 'vendor', 'main']`.
 *
 * @param {Array<string>} packages
 * @returns {Function}
 */
export function packageSort(packages) {
  const first = packages[0];
  const last = packages[packages.length - 1];

  return function sort(a, b) {
    // polyfills always first
    if (a.names[0] === first) {
      return -1;
    }
    // main always last
    if (a.names[0] === last) {
      return 1;
    }
    // vendor before main (only included in prod builds)
    if (a.names[0] !== first && b.names[0] === last) {
      return -1;
    } else {
      return 1;
    }
  };
}
