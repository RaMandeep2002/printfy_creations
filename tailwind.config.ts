import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: { extend: { colors: { ink: '#0d1017', panel: '#131821', line: '#252c38', cyan: '#8be8ff', violet: '#a48bff' } } },
  plugins: []
};

export default config;
