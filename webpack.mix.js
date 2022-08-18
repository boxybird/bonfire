let mix = require('laravel-mix')

mix.js('src/bonfire.js', 'dist').setPublicPath('dist').version()
