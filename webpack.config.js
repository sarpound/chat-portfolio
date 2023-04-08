module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: ['raw-loader', 'less-loader'],
      },
    ],
  },
};
