
module.exports = /*@ngInject*/
    function albumDetailController($rootScope,$scope,$http,$routeParams,album,storage) {

        $scope.name = "album detail";

        $scope.album = null;
        $scope.albumPhotos = [];
        $scope.message = "";

        $scope.showMessage = function(){
            var doShow = false;

            if( $scope.message != "" )
                doShow = true;

            return doShow;
        };

        storage.setContentLoading(true);

        album.getAlbumInfo({id:$routeParams.albumId})
            .then(function (data) {
                $scope.album = data;

                ////$rootScope.$broadcast('ALBUM_INFO_LOADED',$scope.album);

                return album.getPhotos({id:$routeParams.albumId});

            }).then(function (photos) {

                $scope.albumPhotos = photos;
                storage.setContentLoading(false);
                $scope.message = "";

            }).catch(function (e) {
                storage.setContentLoading(false);
                $scope.message = "Album info is not available";
            });
    };