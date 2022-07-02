import {defineConfig} from 'umi';

export default defineConfig({
  npmClient: 'pnpm',
  routes: [
    {path: '/', component: '/home/index'},
    {path: '/docs', component: 'docs'},
    {path: '/rank', component: '/rank/index'},
    {path: '/playlist', component: '/playlist/index'}
  ],
  dva: {},
  plugins: ['@umijs/plugins/dist/dva', '@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
  proxy: {
    '/api': {
      'target': 'https://netease-cloud-music-api-plum-iota.vercel.app',
      'changeOrigin': true,
      'pathRewrite': {'^/api': ''},
    },
  },
});
