const {createConfig, babel, css} = require('webpack-blocks')

module.exports = {
  webpackConfig: createConfig([babel(), css()]),
  require: ['babel-polyfill', 'bulma/css/bulma.css']
}
