'use strict'
app.controller('newPhotoModalCntrl', function ($scope, Upload, PhotoFactory) {
    $scope.showModal = false;

    $scope.upload = function (photos) {
        if (photos && photos.length) {
            for (var i = 0; i < photos.length; i++) {
	            var photo = photos[i];
	            if (!photo.$error) {
	            	var photoToAdd = {
	            		albumId: $scope.albumId,
	            		url: "http://placehold.it/600/24f355",
						thumbnailUrl: "http://placehold.it/150/24f355"
	            	}
	            	PhotoFactory.addPhoto(photoToAdd)
	            	.then(function(){
	            		$scope.photos = [];
	                    $scope.showModal = false;
                	});
            	}
	        }
	    }
	}
    
});