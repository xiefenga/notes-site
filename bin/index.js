#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const cli_1 = require("@vuepress/cli");
const node_os_1 = require("node:os");
const node_path_1 = require("node:path");
const config_1 = __importDefault(require("../config"));
const PKG = module.require('../package.json');
const loadConfig = () => {
    try {
        return module.require((0, node_path_1.resolve)((0, node_os_1.homedir)(), './.notes-site-config'));
    }
    catch (error) {
        console.log('read config file (~/.notes-site-config) faild');
        process.exit();
    }
};
loadConfig();
const onBuild = async () => {
    const { sourceDir } = loadConfig();
    const buildCommand = (0, cli_1.createBuild)(config_1.default);
    await buildCommand(sourceDir);
};
const onDev = async () => {
    const { sourceDir } = loadConfig();
    const devCommand = (0, cli_1.createDev)(config_1.default);
    await devCommand(sourceDir);
};
commander_1.program
    .version(PKG.version, '-v');
commander_1.program
    .command('build')
    .action(onBuild)
    .description('build the source file');
commander_1.program
    .command('dev')
    .action(onDev)
    .description('run dev server to debug');
commander_1.program.parse();
