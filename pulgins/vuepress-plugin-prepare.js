"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const node_child_process_1 = __importDefault(require("node:child_process"));
const exec = (command) => {
    return new Promise((resolve, reject) => {
        node_child_process_1.default.exec(command, (error, stdout) => {
            if (error === null) {
                resolve(stdout);
            }
            else {
                reject(error);
            }
        });
    });
};
exports.default = () => {
    return {
        name: 'vuepress-plugin-prepare',
        multiple: false,
        async onInitialized(app) {
            console.log(app.options);
            try {
                await exec(`rm -rf ${(0, node_path_1.resolve)(__dirname, '../.vuepress')}`);
            }
            catch (error) {
            }
        },
    };
};
