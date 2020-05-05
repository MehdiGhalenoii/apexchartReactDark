const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./index.js',
  mode:'none',
  target:'web',
  output:{
    filename:'res.js',
    path:path.resolve(__dirname, './dist')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:"babel-loader"
      },
      {
        test:/\.css$/,
        loader:['css-hot-loader',MiniCssExtractPlugin.loader , 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      config$: path.resolve(__dirname, './app.config.js')
    },
    modules: ['node_modules','./src/charts']
  },
  devServer:{
    port:3030,
    contentBase:path.join(__dirname,'dist'),
    index:'index.html'
  //  hot:true
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'res.css'
    }),
    new HtmlWebpackPlugin({
      template:'template.html'
    })
  ]
}
