// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any other aliases you need
      'ethers/lib/utils': path.resolve(__dirname, 'node_modules/ethers/lib/utils')
    }
  },
  optimizeDeps: {
    include: ['ethers']
  }
});




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
