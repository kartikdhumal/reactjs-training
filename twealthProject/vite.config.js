import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global `describe`, `test`, `expect`
    environment: 'jsdom', // Simulates a browser environment for React tests
    setupFiles: './src/tests/main.test.js', // Optional, useful for jest-dom setup
    exclude: [...configDefaults.exclude], // Avoids running unnecessary tests
  },
});
