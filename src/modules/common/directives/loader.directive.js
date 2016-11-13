'use strict';

module.exports = /*@ngInject*/
    function navbarTop($rootScope,storage) {

        return {
            restrict: 'AEM',
            transclude: true,
            replace:true,
            link: function (scope, element, attrs) {

                scope.showSpinner = false;

                $rootScope.$watch(
                    function () {
                        return storage.getContentLoading();
                    },
                    function(newValue, oldValue) {
                        if ( newValue !== oldValue ) {
                            scope.showSpinner = newValue;
                        }
                    }
                );
            },
            templateUrl: 'app/foo/templates/loader.directive.html'
        };
    };