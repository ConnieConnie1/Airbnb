const path = require('path');

module.exports = {
  entry: './src/index.js',  // Update with your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Update with your output directory
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // optional: specify the output path for images
            },
          },
        ],
      },
    ],
  },
};
