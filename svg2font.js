const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs')
const path = require('path')

const dir = 'src'

const options = {
  fontName: 'rry-vite-pro',
  cssPrefix: 'b-font',
  svgs: path.join(dir, 'svg/*.svg'),
  fontsOutput: path.join(dir, 'fonts/'),
  cssOutput: path.join(dir, 'fonts/font.css'),
  htmlOutput: path.join(dir, 'fonts/_font-preview.html'),
  jsOutput: path.join(dir, 'fonts/fonts.js'),
}

new WebpackIconfontPluginNodejs(options).build()
