import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'prod'
  const isDev = mode === 'dev'
  const isTest = mode === 'test'

  let build = {}
  if (isProd) {
    build = {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'vue-cool-box-selector',
        fileName: 'index',
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        /**
         * DESC:
         * make sure to externalize deps that shouldn't be bundled
         * into your library
         */
        external: [
          'vue',
          'vue-demi',
        ],
        output: {
          /**
           * DESC:
           * Provide global variables to use in the UMD build
           * for externalized deps
           */
          globals: {
            'vue': 'Vue',
            'vue-demi': 'VueDemi',
          },
        },
      },
    }
  }

  let optimizeDeps = {}
  if (isDev) {
    /**
     * DESC:
     * dependency pre-bundling
     */
    optimizeDeps = {
      exclude: ['vue-demi'],
    }
  }

  let test = {}
  if (isTest) {
    /**
     * DESC:
     * vitest config
     */
    test = {
      include: ['test/**/*.test.ts'],
      environment: 'happy-dom',
      deps: {
        inline: [
          '@vue',
          'vue-demi',
        ],
      },
      coverage: {
        reporter: [
          'text',
          'text-summary',
          'lcov',
        ],
      },
    }
  }

  return {
    plugins: [vue()],
    optimizeDeps,
    build,
    test,

    /**
     * DESC:
     * defining aliases
     */
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
    },
  }
})
