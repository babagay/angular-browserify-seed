'use strict';

module.exports = /*@ngInject*/
    function navbarTop($rootScope) {

        return {
            restrict: 'AEM',
            transclude: true,
            replace:true,
            link: function (scope, element, attrs) {
                //var el = angular.element(template);
                //el = $compile(el)(scope);
                //angular.element(element[0]).append(el);

                //console.log(scope)
                //console.log(element)
                //console.log(attrs)

                //element.html("DDD")
            },
            templateUrl: 'app/foo/templates/navbarTop.directive.html'
        };
    };