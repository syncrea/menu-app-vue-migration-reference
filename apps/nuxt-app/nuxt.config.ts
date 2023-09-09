import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import replace from '@rollup/plugin-replace';
import { applicationCompilerCompatConfig } from './src/compat';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  // Sticking to Nx convention of src subdirectory for source files
  dir: {
    assets: 'src/assets',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
    modules: 'src/modules',
    pages: 'src/pages',
    plugins: 'src/plugins',
    public: 'src/public',
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
    rollupConfig: {
      // Somehow the rollup replace plugin causes the following error:
      // Type instantiation is excessively deep and possibly infinite.ts(2589)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      plugins: [
        replace({
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
          preventAssignment: true
        })
      ]
    }
  },
  vite: {
    plugins: [
      nxViteTsPaths()
    ],
    resolve: {
      // Resolve alias used to enable Vue migration build
      // Because of Nuxt relying on ESM exports of vue, we need to map directly to vue.runtime.esm-bundler.js
      alias: [{
        find: /^vue$/, replacement: '@vue/compat/dist/vue.runtime.esm-bundler.js'
      }]
    }
  },
  vue: {
    compilerOptions: {
      compatConfig: applicationCompilerCompatConfig(),
    },
  },
  css: [
    '@/src/assets/main.css',
  ],
});
