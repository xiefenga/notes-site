"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vuepress_1 = require("vuepress");
const bundler_vite_1 = require("@vuepress/bundler-vite");
const plugin_search_1 = require("@vuepress/plugin-search");
const vuepress_plugin_index_1 = __importDefault(require("./pulgins/vuepress-plugin-index"));
const vuepress_plugin_title_1 = __importDefault(require("./pulgins/vuepress-plugin-title"));
// import preparePlugin from './pulgins/vuepress-plugin-prepare'
const theme_1 = require("./theme");
const theme = (0, theme_1.localTheme)();
const bundler = (0, bundler_vite_1.viteBundler)();
const sitePage = {
    title: '个人笔记',
    lang: 'zh-CN',
    description: '',
};
const plugins = [
    (0, plugin_search_1.searchPlugin)(),
    // preparePlugin(),
    (0, vuepress_plugin_title_1.default)(),
    (0, vuepress_plugin_index_1.default)(),
];
exports.default = (0, vuepress_1.defineUserConfig)({
    theme,
    bundler,
    plugins,
    ...sitePage,
    dest: 'dist',
    public: 'public',
    temp: '.vuepress/.temp',
    cache: '.vuepress/.cache',
});
