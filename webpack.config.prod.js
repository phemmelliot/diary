// third-party libraries
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// common configuration
const common = require('./webpack.config.common');

// const ASSET_PATH = process.env.ASSET_PATH || '/';

/**
 * @desc production configuration
 */
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CopyWebpackPlugin([
      { from: 'public/images', to: 'images' }
    ]),
  ],
});
