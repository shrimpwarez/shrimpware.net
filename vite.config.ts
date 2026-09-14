import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
            },
        },
    },
    define: {
        __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
    resolve: {
        alias: {
            '~bootstrap': '/node_modules/bootstrap',
        }
    },
    build: {
        minify: 'esbuild',
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            }
        }
    },
})
