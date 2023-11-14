import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTest.ts'],
    clearMocks: true,
    globals: true
  }
});
