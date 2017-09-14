'use strict'
app.controller('deleteAlbumCntrl', function ($scope, PhotoFactory) {
    $scope.close = function(){
    	$scope.showModal = false;
    }
    $scope.deleteAlbum = function(album){
    	PhotoFactory
    	.destroyAlbum(album.id)
    	.then(function(){
    		$scope.showModal = false;
    	});
    }
});