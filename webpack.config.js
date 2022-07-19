const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const reactRule = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const styleRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const rules = [styleRule, reactRule]

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'

  return {
    output: {
      filename: isProduction
        ? '[main].[contenthash].js'
        : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'public/index.html' })
    ],
    module: {
      rules
    },
    devServer: {
      open: true,
      port: 3001,
      compress: true
    }
  }
}
