module.exports = {
  entry: [
    './src/index.jsx',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json/,
        exclude: /node_modules/,
        loader: 'json',
      },
      // {
      //   test: require.resolve('react'),
      //   loader: 'expose?React'
      // }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
};
