const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const helpers = require('./helpers');

function sassLoaderOptions(indentedSyntax=false) {
  return {
    implementation: require('sass'),
    sassOptions: { indentedSyntax },
  }
}

module.exports = {
  entry: helpers.root('src', 'main.js'),
  output: {
    path: helpers.root('dist'),
    filename: 'app.bundler.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': helpers.root('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          presets: [
            ["@babel/preset-env", {
              useBuiltIns: "usage",
              corejs: 3,
            }]
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: sassLoaderOptions(true)
          }
        ]
      },
      {
        test:/\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: sassLoaderOptions(false)
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name() {
                if (process.env.NODE_ENV === 'development') {
                  return '[path][name].[ext]';
                }

                return '[contenthash].[ext]';
              },
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: 'Vue demo',
      template: helpers.root('src', 'index.html'),
      favicon: helpers.root('src', 'favicon.ico'),
    })
  ]
}
