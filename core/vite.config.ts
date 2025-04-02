/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import pkg from './package.json';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep: any) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj: any) => Object.keys(obj).map(makeRegex);

export default defineConfig(() => {
  return {
    build: {
      target: 'es2020',
      lib: {
        entry: 'src/index.ts',
        name: 'rilix-ui',
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => `${entryName}.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        // externalize deps that shouldn't be bundled into the library
        external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
        output: {
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      },
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./test-setup.ts'],
      globals: true,
    },
    plugins: [qwikVite(), tsconfigPaths()],
  };
});
