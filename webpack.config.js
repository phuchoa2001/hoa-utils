const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib-mini', 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './package.json',
          to: path.resolve(__dirname, 'lib-mini'),
          transform: (content) => {
            const packageJson = JSON.parse(content.toString());
            packageJson.name = 'hoa-utils-mini';
            packageJson.main = 'dist/index.js';
            packageJson.files = ['dist/**/*'];
            return Buffer.from(JSON.stringify(packageJson));
          },
        },
        {
          from: './README.md', // Sao chép file README.md
          to: path.resolve(__dirname, 'lib-mini'), // Đích đến là thư mục lib-mini
        },
      ],
    }),
  ],
  externals: [nodeExternals()]
};