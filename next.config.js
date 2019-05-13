const withTypescript = require('@zeit/next-typescript');
const withLess = require('@zeit/next-less');
const lessConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
};
const assetsPrefix = process.env.NODE_ENV === 'productionx' ? 'https://io.utohub.com/utohub/home' : '';

module.exports = {
  ...withTypescript(withLess(lessConfig)),
  assetPrefix: assetsPrefix,
  publicRuntimeConfig: {
    assetPrefix: assetsPrefix,
  }
};