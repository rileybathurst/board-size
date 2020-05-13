const path = require('path');

module.exports = {
  entry: ['./src/app.js', './src/app.scss', './src/index.html'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ // this seems kinda over complicated and a lot of steps
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' }, // test pulling some of these out
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif|html)$/,
        use: [
          'file-loader'
        ]
      }
    ], // rules
  }, // module
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
  },
} // module.export