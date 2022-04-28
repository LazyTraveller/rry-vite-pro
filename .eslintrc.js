const path = require('path')

module.exports = {
  extends: ['plugin:gm-react-app/recommended'],
  settings: {
    'import/resolver': {
      // 配置 alias,和 webpack config.resolver.alias 保持一致即可
      'gmfe-alias': {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },
  rules: {
    "react/jsx-handler-names": 'off',
    "react-hooks/exhaustive-deps": 'off'
  }
}
