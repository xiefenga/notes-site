"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localTheme = void 0;
const utils_1 = require("@vuepress/utils");
const theme_default_1 = require("@vuepress/theme-default");
const localTheme = (options = {}) => {
    return {
        name: 'vuepress-theme-local',
        extends: (0, theme_default_1.defaultTheme)(options),
        layouts: {
            Index: utils_1.path.resolve(__dirname, './layouts/Index.vue'),
            Catelog: utils_1.path.resolve(__dirname, './layouts/Catelog.vue'),
        },
    };
};
exports.localTheme = localTheme;
