import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { defineConfig } from 'tsup';

import getConfig from '@repo/tsup-config';

export default defineConfig((options) => {
  return {
    entryPoints: ['src/index.ts'],
    ...getConfig({
      watch: options.watch ?? false,
      esbuildPlugins: [vanillaExtractPlugin()],
    }),
    ...options,
  };
});
