module.exports = {
  entry: {
    bundle: './src/index.jsx',
    // game: './src/lib/game.js',
    tests: './src/tests/index.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
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
    filename: '[name].js',
  },
  devServer: {
    contentBase: './dist',
  },
};
