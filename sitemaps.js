const sitemap = require('nextjs-sitemap-generator'); 
sitemap({  
    baseUrl: 'http://connectnib.herokuapp.com',  
    pagesDirectory: __dirname + "/pages",  
    targetDirectory : 'static/'  
  });