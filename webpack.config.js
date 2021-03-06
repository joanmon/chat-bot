var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .addEntry('app', './client/js/index.js')
    .addStyleEntry('main', './client/css/main.css')
    .enableReactPreset()
;

module.exports = Encore.getWebpackConfig();