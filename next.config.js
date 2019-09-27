const withCSS = require('@zeit/next-css')
const sitemap = require('nextjs-sitemap-generator');  
module.exports = {
  target: "server"
};
module.exports = withCSS({
  /* config options here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
})
webpack: config => {
  // Fixes npm packages that depend on `fs` module
  config.node = {
    fs: 'empty'
  }
  return config
}
sitemap({  
  baseUrl: 'http://connectnib.herokuapp.com',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});