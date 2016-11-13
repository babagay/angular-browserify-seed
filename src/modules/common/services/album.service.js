'use strict';

module.exports = /*@ngInject*/
    function album($rootScope, $http, $q) {
        return {
            name:"album info service",
            //photos:[],
            getAlbumInfo: function(album){

                var deferred = $q.defer();

                    $http.get("http://jsonplaceholder.typicode.com/albums/" + album.id)
                        .then(function (response) {
                            deferred.resolve(response.data);
                        },
                        function (response) {
                            // Error
                            deferred.reject(response);
                        });

                return deferred.promise;
            },
            getPhotos: function (album) {
                var deferred = $q.defer();

                $http.get("http://jsonplaceholder.typicode.com/photos")
                    .then(function (response) {
                        deferred.resolve(response.data.filter(function(imgObj){
                            if ('id' in imgObj && typeof(imgObj.id) === 'number' && !isNaN(imgObj.id) && imgObj.albumId == album.id)
                                return true;

                            return false;
                        }));
                    },
                    function (response) {
                        // Error
                        deferred.reject(response);
                    });

                return deferred.promise;
            },
            getImageInfo: function(image){
                var deferred = $q.defer();

                $http.get("http://jsonplaceholder.typicode.com/photos/" + image.id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    },
                    function (response) {
                        // Error
                        deferred.reject(response);
                    });

                return deferred.promise;
            }
        };
    };