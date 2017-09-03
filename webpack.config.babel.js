import path from 'path';

export default {
  context: __dirname,
  cache: true,

  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './static'),
    compress: true,
    port: 8080
  },

  entry: {
    'statistician-quiz': './statistician-quiz/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }]
    }, {
      test: /\.ya?ml/,
      loader: 'json-loader!yaml-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!raw-loader!sass-loader'
        }
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'raw-loader'
      }, {
        loader: 'sass-loader',
        options: { sourceMap: true }
      }]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader'
      }, {
        loader: 'image-webpack-loader',
        options: {
          svgo: {
            plugins: [
              'removeXMLProcInst',
              'removeXMLNS'
            ]
          }
        }
      }]
    }] // end of module.rules
  } // end of module
};
