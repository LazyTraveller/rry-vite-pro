import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import localConfig from './config/local'
import deployConfig from './config/deploy'
import * as path from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const packageJSON = JSON.parse(readFileSync('./package.json', 'utf-8'))
  const isEnvDevelopment = mode === 'development'
  const isEnvTest = mode === 'test'
  const isEnvProduction = mode === 'production' && command === 'build'
  const config = isEnvDevelopment ? localConfig : deployConfig

  const constants = {
    __DEBUG__: isEnvDevelopment,
    __DEVELOPMENT__: isEnvDevelopment,
    __TEST__: isEnvTest,
    __PRODUCTION__: isEnvProduction,
    __VERSION__: packageJSON.version as string,
    __NAME__: (packageJSON.aliasName as string) || 'none',
    __CLIENT_NAME__: (packageJSON.clientName as string) || 'none',
    __BRANCH__: process.env.GIT_BRANCH || 'none',
    __COMMIT__: process.env.GIT_COMMIT || 'none',
    __BASE_PATH__: config.basePath as string,
    __ENV__: mode,
  }

  const injectGlobalVariables = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html: any) {
        for (const [key, value] of Object.entries(constants)) {
          if (typeof value === 'string') {
            html = html.replace(key, JSON.stringify(value))
          } else {
            html = html.replace(key, value)
          }
        }
        return html
      },
    }
  }

  function getPublicPath() {
    if (!isEnvProduction) return '/'
    const alias = process.env.PROJECT_ALIAS || constants.__NAME__
    const slug = process.env.CI_COMMIT_REF_SLUG || 'master'
    return `//txcdn.guanmai.cn/${alias}/${slug}/`
  }

  return defineConfig({
    plugins: [react(), injectGlobalVariables()],
    base: getPublicPath(),
    server: {
      watch: {
        ignored: ['!**/node_modules/autopreview/**'],
      },
      open: `/${constants.__NAME__}`,
      proxy: {
        '/ceres': config.basePath,
      },
    },
    build: {
      outDir: 'build',
    },
    define: {
      ...Object.keys(constants).reduce((pre, key) => {
        return {
          ...pre,
          [key]: JSON.stringify(constants[key]),
        }
      }, {}),
      // 兼容原webpack依赖
      process: {
        env: {},
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    optimizeDeps: {
      exclude: ['autopreview'],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  })
}
