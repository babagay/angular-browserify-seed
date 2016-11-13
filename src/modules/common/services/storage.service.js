'use strict';

module.exports = /*@ngInject*/
    function storage($rootScope) {
        var isContentLoading = false;
        return {
            setContentLoading: function (isLoading) {
                isContentLoading = isLoading;
            },
            getContentLoading: function () {
                return isContentLoading;
            }
        };
    };
