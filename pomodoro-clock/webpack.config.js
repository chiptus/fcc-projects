module.exports = {
  entry: [
    './src/index.jsx',
  ],
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: './dist',
  },
};
