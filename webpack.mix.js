let mix = require('laravel-mix')

mix
  .js('src/bonfire.js', 'dist')
  .css('src/bonfire.css', 'dist')
  .styles(['node_modules/nprogress/nprogress.css'], 'dist/vendor.css')
  .setPublicPath('/')
  .version()
