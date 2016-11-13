'use strict';

module.exports = /*@ngInject*/
    function albums($rootScope,$http,storage) {

        return {
            restrict: 'AEM',
            //transclude: 'element',
            replace:true,
            link: function (scope, element, attrs) {


                scope.albums = [];

                storage.setContentLoading(true);

                $http({
                    method: 'GET',
                    url: 'http://jsonplaceholder.typicode.com/albums'
                }).then(function success(res) {
                    scope.albums = res.data || [];
                    storage.setContentLoading(false);

                }, function error(res) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });



            },
            templateUrl: 'app/foo/templates/albums.directive.html'
        };
    };