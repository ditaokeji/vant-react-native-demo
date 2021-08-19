import { defineConfig, IConfig } from "dumi"

export default defineConfig({
  title: 'ts-ext-react',
  mode: 'site',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  favicon: 'https://img01.yzcdn.cn/vant/log.png',
  publicPath: '/',
  exportStatic: {},
  hash: true,
  resolve: {
    includes: ['packages/button']
  }
} as IConfig)
