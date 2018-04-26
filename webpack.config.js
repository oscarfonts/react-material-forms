const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryPath = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'dist')

const htmlPlugin = new HtmlWebpackPlugin({
  title: 'react-material-forms'
})

module.exports = {
  context: entryPath,
  entry: './index.jsx',
  mode: 'development',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['env', {'modules': false}], 'react'],
          plugins: ['react-html-attrs', 'transform-class-properties']
        }
      }, {
        loader: 'eslint-loader'
      }]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(eot|woff|woff2|ttf|svg|png)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [htmlPlugin],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath
  }
}
