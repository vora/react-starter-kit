import path from 'path';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Normally there should be a `defineConfig` around this
// Configuration object, however this is not possible
// because we need to add a "test" object that is
// not supported on the regular `defineConfig`
// and the `defineConfig` from viTest does not
// work for some reason.
// https://vitejs.dev/config/
export default {
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '~': path.resolve(process.cwd(), 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: path.resolve(
      process.cwd(),
      'src',
      'lib',
      'testHelpers',
      'setupTests.ts',
    ),
  },
};
