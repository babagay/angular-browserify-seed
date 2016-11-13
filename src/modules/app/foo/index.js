'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('albumsController', require('./controllers/albums.controller'))
        .controller('albumDetailController', require('./controllers/albumDetail.controller'))
        .controller('imageDetailController', require('./controllers/imageDetail.controller'))
        .controller('homeController', require('./controllers/home.controller'))
;
