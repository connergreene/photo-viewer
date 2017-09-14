'use strict'
app.controller('editPhotoModalCntrl', function ($scope, PhotoFactory) {
    $scope.showModal = false;
    $scope.toggleShowModal = function(){
        if($scope.showModal === false){
            PhotoFactory
            .getAlbum($scope.photo.albumId)
            .then(function(currentAlbum){
                $scope.albumChoice = currentAlbum;
            })
            .then(function(){
                PhotoFactory
                .getAlbums()
                .then(function(albums){
                    $scope.albums = albums
                }) 
            })
            $scope.showModal = true;
        }
        else{
            $scope.showModal = false;
        }
    }

    $scope.setChoice = function(album){
        $scope.albumChoice = album;
    }

    $scope.updatedPhoto = {};
    $scope.submit = function(photoInfo){
        $scope.updatedPhoto.id = $scope.photo.id;
        $scope.updatedPhoto.albumId = $scope.albumChoice.id;
        if(!photoInfo){
            $scope.updatedPhoto.title = $scope.photo.title;
        }
        else{
            $scope.updatedPhoto.title = photoInfo.title;
        }
        PhotoFactory
        .updatePhoto($scope.updatedPhoto)
        .then(function(){
            $scope.showModal = false;
      })    
    }
});