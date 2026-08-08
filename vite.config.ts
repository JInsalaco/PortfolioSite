/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Honours `baseUrl: "src"` from tsconfig.json, so imports like
    // `components/ui/button` and `lib/utils` keep resolving.
    tsconfigPaths: true,
  },
  build: {
    // Kept as `build` (Vite's default is `dist`) so the existing Azure Static Web
    // Apps workflow, which deploys `output_location: "build"`, keeps working.
    outDir: 'build',
  },
  server: {
    // Matches the port Create React App used to serve on.
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
});
