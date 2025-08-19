import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@/components": path.resolve(__dirname, "./components"),
      "@/utils": path.resolve(__dirname, "./utils"),
      "@/styles": path.resolve(__dirname, "./styles"),
    },
  },
  server: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접속 허용
    port: 3000,
    open: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.0.40',
      '74fd99e56501.ngrok.app',
      '3427f48de54a.ngrok.app'
    ],
    proxy: {
      '/api/nvidia': {
        target: 'https://integrate.api.nvidia.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/nvidia/, ''),
        headers: {
          'Origin': 'https://integrate.api.nvidia.com'
        }
      },
      '/api/local-ai': {
        target: 'http://192.168.0.40:1234',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/local-ai/, ''),
        headers: {
          'Content-Type': 'application/json'
        }
      },
      '/v1': {
        target: 'http://127.0.0.1:1234',  // MLX Model Server
        changeOrigin: true,
        secure: false,
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
          });
        }
      },
      '/api/edge-tts': {
        target: 'http://127.0.0.1:8001',  // Edge TTS Server
        changeOrigin: true,
        secure: false
      },
      '/api/kitten-tts': {
        target: 'http://127.0.0.1:8002',  // Kitten TTS Server
        changeOrigin: true,
        secure: false
      },
      '/api/xclova': {
        target: 'https://clovastudio.stream.ntruss.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/xclova/, ''),
        secure: true,
        headers: {
          'Content-Type': 'application/json'
        }
      },
      '/api/proxy': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/proxy/, ''),
        secure: false
      }
    }
  }
})
