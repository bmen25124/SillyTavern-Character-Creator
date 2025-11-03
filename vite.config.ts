import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * A custom Vite plugin to correctly handle SillyTavern's runtime imports.
 * The `sillytavern-utils-lib` package contains imports that go up several
 * directories (e.g., `../../../power-user.js`) to access core ST scripts.
 *
 * This plugin marks these imports as `external`, leaving them for the browser
 * to resolve within the SillyTavern environment. For tests, it would be
 * necessary to mock these, but for the build, this is sufficient.
 */
function sillyTavernExternalsPlugin() {
  return {
    name: 'sillytavern-externals',
    resolveId(id: string) {
      if (id.includes('../../../')) {
        // For builds, keep it external so the browser can resolve it inside SillyTavern.
        if (!process.env.VITEST) {
          return { id, external: true };
        }
      }
      return null;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const entryPath = path.resolve(__dirname, 'src/index.tsx');

  return {
    plugins: [react(), sillyTavernExternalsPlugin()],
    // This `define` block is necessary to prevent 'process is not defined' errors
    // in dependencies that check `process.env.NODE_ENV`.
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      // The sourcemap is only generated for development builds, not production.
      sourcemap: mode !== 'production',
      lib: {
        entry: entryPath,
        fileName: 'index',
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // Check if the asset's source is the main stylesheet associated with our entry point.
            if (assetInfo.source?.toString().includes('main.scss')) {
              return 'style.css';
            }
            // For all other assets, fall back to the default naming scheme.
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      emptyOutDir: false,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      // Vitest doesn't need a specific setup file for these tests
      // setupFiles: ['src/test/setup.ts'],
      include: ['src/test/**/*.test.ts'],
    },
  };
});
