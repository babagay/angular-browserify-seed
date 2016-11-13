'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/foo/templates/home.html',
                controller: 'homeController'
            })
            .when('/albums', {
                templateUrl: 'app/foo/templates/albums.html',
                controller: 'albumsController'
            })
            .when('/album/:albumId', {
                templateUrl: 'app/foo/templates/album-detail.html',
                controller: 'albumDetailController'
            })
            .when('/image/:imageId', {
                templateUrl: 'app/foo/templates/image-detail.html',
                controller: 'imageDetailController'
            })
            .otherwise({
                redirectTo: '/'
            });
    };