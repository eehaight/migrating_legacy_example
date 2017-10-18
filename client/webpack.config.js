var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
        vendor: [
          'angular',
          '@uirouter/core',
          '@uirouter/angularjs',
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
    ],
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: { loader: 'babel-loader', options: { presets: ['babel-preset-es2015'] } },
        }
      ]
    }
};
