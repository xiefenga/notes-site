import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import indexPlugin from './pulgins/vuepress-plugin-index'
import titlePulgin from './pulgins/vuepress-plugin-title'
// import preparePlugin from './pulgins/vuepress-plugin-prepare'

import { localTheme } from './theme'

const theme = localTheme()

const bundler = viteBundler()

const sitePage = {
  title: '个人笔记',
  lang: 'zh-CN',
  description: '',
}

const plugins = [
  searchPlugin(),
  // preparePlugin(),
  titlePulgin(),
  indexPlugin(),
]

export default defineUserConfig({
  theme,
  bundler,
  plugins,
  ...sitePage,
  dest: 'dist',
  public: 'public',
  temp: '.vuepress/.temp',
  cache: '.vuepress/.cache',
})

