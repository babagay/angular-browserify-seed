'use strict';

module.exports = /*@ngInject*/
    function albumContent($rootScope,$http) {

        return {
            restrict: 'AEM',
            transclude: 'element',
            replace:true,
            link: function (scope, element, attrs) {


                scope.photos = [];

                //$http({
                //    method: 'GET',
                //    url: 'http://jsonplaceholder.typicode.com/albums'
                //}).then(function success(res) {
                //    scope.albums = res.data || [];
                //
                //}, function error(res) {
                //});



            },
            templateUrl: 'app/foo/templates/album-content.directive.html'
        };
    };