'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('exampleDirective', require('./example.directive'))
        .directive('navbarTop', require('./navbarTop.directive'))
        .directive('albums', require('./albums.directive'))
        .directive('loader', require('./loader.directive'))
        //.directive('albums', require('./albumContent.directive'))
;


