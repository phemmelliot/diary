// third-party libraries
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// common configuration
const common = require('./webpack.config.common');

const ASSET_PATH = process.env.ASSET_PATH || '/';

/**
 * @desc production configuration
 */
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        SERVER_URL: JSON.stringify('https://lotus-ah-staging.herokuapp.com'),
        CLIENT_REDIRECT: JSON.stringify('https://lotus-ah-frontend.herokuapp.com'),
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
      },
    }),
    new CopyWebpackPlugin([
      { from: 'public/images', to: 'images' }
    ]),
  ],
});
