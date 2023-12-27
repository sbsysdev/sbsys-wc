import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'SBSYSWC',
            fileName: 'sbsys-wc',
        },
        rollupOptions: {
            external: [/^lit.*/],
            output: {
                globals: {
                    lit: 'lit',
                    'lit/decorators.js': 'lit/decorators.js',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        splitVendorChunkPlugin(),
        dts({
            insertTypesEntry: true,
        }),
    ],
});
