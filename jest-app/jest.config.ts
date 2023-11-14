import type { Config } from 'jest';

const esModules = ['lodash-es', 'swiper', 'swiper/react', 'swiper/modules'].join('|');

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    'swiper/css': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest'
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  clearMocks: true,
  global: true
};

export default config;
