import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //Since browsers do not support Node's Core Modules, packages that use them must be polyfilled to function in browser environments. In an attempt to prevent runtime errors, Vite produces errors or warnings when your code references builtin modules such as fs or path.
    nodePolyfills({
      protocolImports: true,
    }),
  ],
});
