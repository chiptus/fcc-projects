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
      // {
      //   test: require.resolve('react'),
      //   loader: 'expose?React'
      // }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/`,
    publicPath: '/',
    filename: 'bundle.js',
  },
};
