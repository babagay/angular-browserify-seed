
module.exports = /*@ngInject*/
    function imageDetailController($rootScope,$scope,$http,$routeParams,album) {

        $scope.name = "image detail";

        $scope.image = null;

        album.getImageInfo({id:$routeParams.imageId})
            .then(function (data) {
                $scope.image = data;
            });

    };