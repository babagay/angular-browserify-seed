'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('album', require('./album.service'))
        .factory('storage', require('./storage.service'))
;
