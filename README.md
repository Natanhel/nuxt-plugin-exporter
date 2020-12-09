# nuxt-plugin-exporter
Export your imports into a plugin file!
This repo was created for speeding up your build process of the Nuxt.JS framework

Download into your repo by using

    npm i nuxt-plugin-exporter
  
use as follows:

    const buildPlugins = require('nuxt-plugin-exporter')
    buildPlugins()
    
There will be a plugin folder created in your root directory.
You'll have to self include into your nuxt.config.js file in order to not mess with your file.
