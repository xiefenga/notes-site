import { resolve } from 'node:path'
import child_process from 'node:child_process'

import { App } from '@vuepress/core'

const exec = (command: string) => {
  return new Promise((resolve, reject) => {
    child_process.exec(command, (error, stdout) => {
      if (error === null) {
        resolve(stdout)
      } else {
        reject(error)
      }
    })
  })
}


export default () => {

  return {
    name: 'vuepress-plugin-prepare',
    multiple: false,

    async onInitialized(app: App) {
      console.log(app.options)

      try {
        await exec(`rm -rf ${resolve(__dirname, '../.vuepress')}`)
      } catch (error) {

      }
    },

  }
}