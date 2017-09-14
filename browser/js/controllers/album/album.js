'use strict'
app.controller('AlbumCtrl', function ($scope, $sce, theAlbum, albumForTitle, PhotoFactory) {
	$scope.album = theAlbum;
	$scope.albumTitle = albumForTitle.title;
	$scope.albumId = albumForTitle.id;
	$scope.editMode = false;
	$scope.deleteMode = false;

	for (var i = 0; i < $scope.album.length; i++) {
		$scope.album[i].url = $sce.trustAsResourceUrl($scope.album[i].url);
	}

	$scope.toggleEditMode = function(){
		if($scope.editMode === true){
			$scope.editMode = false;
		}
		else{
			$scope.editMode = true;
		}
	}

	$scope.photoFilter = function(item, text){
		if(!text){
			return true;
		}
		var lowerStr = (item.title + "").toLowerCase();
		return lowerStr.indexOf(text.toLowerCase()) === 0;
	}

	$scope.deleteToggle = function(){
		if($scope.deleteMode === true){
			$scope.deleteMode = false;
		}
		else{
			$scope.deleteMode = true;
		}
	}

	$scope.deletePhoto = function(photo){
    	PhotoFactory
    	.destroyPhoto(photo.id)
    	.then(function(){
    		$scope.deleteToggle();
    	});
    }
});