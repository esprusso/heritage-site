import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

const contentRevision = createHash('sha256')
    .update(readFileSync(new URL('./public/content.json', import.meta.url)))
    .digest('hex').slice(0, 12)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    define: {
        'import.meta.env.VITE_CONTENT_REVISION': JSON.stringify(contentRevision),
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                    'vendor-motion': ['framer-motion'],
                }
            }
        }
    }
})
