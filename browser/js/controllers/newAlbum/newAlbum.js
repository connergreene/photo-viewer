'use strict'
app.controller('newAlbumModalCntrl', function ($scope, PhotoFactory) {
    $scope.showModal = false;
    $scope.newAlbum = {};

    $scope.submit = function(){
        var album = {};
        PhotoFactory
        .checkUserByName($scope.newAlbum.ownerName)
        .then(function(userId){
            if(userId){
                album.userId = userId;
                album.title = $scope.newAlbum.title;
                PhotoFactory
                .createAlbum(album)
                .then(function(){
                    $scope.showModal = false;
                    $scope.err = null;
                });
            }
            else{
                $scope.err =  "User doesn't exist. Please try again."
            }
        });
    }
});