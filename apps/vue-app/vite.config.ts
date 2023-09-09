/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { applicationCompilerCompatConfig } from './src/compat';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/vue-app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    nxViteTsPaths(),
    vue({
      template: {
        compilerOptions: {
          compatConfig: applicationCompilerCompatConfig(),
        },
      },
    }),
  ],

  resolve: {
    // Resolve alias used to enable Vue migration build
    alias: [{
      find: /^vue$/, replacement: '@vue/compat'
    }]
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}'],
  },
});
