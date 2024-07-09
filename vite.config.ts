import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
    }),
  ],
  build: {
    outDir: "dist",
  },
  base: "./",
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'), 
      'store': path.resolve(__dirname, 'src/store'), 
      'hooks': path.resolve(__dirname, 'src/hooks'), 
      'components': path.resolve(__dirname, 'src/components'), 
      'pages': path.resolve(__dirname, 'src/pages'), 
      'lib': path.resolve(__dirname, 'src/lib'), 
      'services': path.resolve(__dirname, 'src/services'), 
      'utils': path.resolve(__dirname, 'src/utils'), 
      'consts': path.resolve(__dirname, 'src/consts'), 
      'helpers': path.resolve(__dirname, 'src/helpers'), 
      'App': path.resolve(__dirname, 'src/App'), 
      'theme': path.resolve(__dirname, 'src/theme'), 
    },
  },
});

// export default defineConfig({
//   plugins: [react(), basicSsl()],
//   build: {
//     outDir: "dist",
//   },
//   base: "./",
// });
