import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { tmpdir } from 'os';
import { devLogger } from '@meituan-nocode/vite-plugin-dev-logger';
import {
  devHtmlTransformer,
  prodHtmlTransformer,
} from '@meituan-nocode/vite-plugin-nocode-html-transformer';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

const CHAT_VARIABLE = process.env.CHAT_VARIABLE || '';
const PUBLIC_PATH = process.env.PUBLIC_PATH || '';

const isProdEnv = process.env.NODE_ENV === 'production';
const publicPath = (isProdEnv && CHAT_VARIABLE)
  ? PUBLIC_PATH + '/' + CHAT_VARIABLE
  : PUBLIC_PATH + '/';
const outDir = (isProdEnv && CHAT_VARIABLE) ? 'build/' + CHAT_VARIABLE : 'build';
const plugins = isProdEnv
  ? CHAT_VARIABLE
    ? [react(), prodHtmlTransformer(CHAT_VARIABLE), Sitemap({
        hostname: 'https://mary-11.vercel.app',
        outDir: outDir,
        include: ['/**'],
        generateRobotsTxt: false // 禁用自动生成robots.txt，避免构建错误
      })]
    : [react(), Sitemap({
        hostname: 'https://mary-11.vercel.app',
        outDir: outDir,
        include: ['/'],
        generateRobotsTxt: false // 禁用自动生成robots.txt，避免构建错误
      })]
  : [
      devLogger({
        dirname: resolve(tmpdir(), '.nocode-dev-logs'),
        maxFiles: '3d',
      }),
      react(),
      devHtmlTransformer(CHAT_VARIABLE),
    ];

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '::',
    port: '8080',
    hmr: {
      overlay: false,
    },
  },
  plugins,
  base: publicPath,
  build: {
    outDir,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: 'lib',
        replacement: resolve(__dirname, 'lib'),
      },
    ],
  },
});
