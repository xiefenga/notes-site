#!/usr/bin/env node

import { homedir } from 'node:os'
import { resolve } from 'node:path'

import { program } from 'commander'
import { createBuild, createDev } from '@vuepress/cli'

import vuepressConfig from './config'

const PKG = module.require('../package.json')

const loadConfig = () => {
  try {
    return module.require(
      resolve(homedir(), './.notes-site-config'))
  } catch (error) {
    console.log('read config file (~/.notes-site-config) faild')
    process.exit()
  }
}

loadConfig()

const onBuild = async () => {
  const { sourceDir } = loadConfig()
  const buildCommand = createBuild(vuepressConfig)
  await buildCommand(sourceDir)
}

const onDev = async () => {
  const { sourceDir } = loadConfig()
  const devCommand = createDev(vuepressConfig)
  await devCommand(sourceDir)
}

program
  .version(PKG.version, '-v')

program
  .command('build')
  .action(onBuild)
  .description('build the source file')

program
  .command('dev')
  .action(onDev)
  .description('run dev server to debug')

program.parse()

