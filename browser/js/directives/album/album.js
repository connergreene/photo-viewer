'use strict'
app.directive('album', function ($state, PhotoFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/album/album.html',
		scope: {
         	album: '='
      	},
		link: function (scope, element, attrs) {
			PhotoFactory.getUser(scope.album.userId)
			.then(function(user){
				scope.album.ownerName = user.name;
			});

			PhotoFactory.getPhotosInAlbum(scope.album.id)
			.then(function(photos){
				scope.firstPhoto = photos[0].thumbnailUrl;
				scope.secondPhoto = photos[1].thumbnailUrl;
				scope.thirdPhoto = photos[2].thumbnailUrl;
				scope.fourthPhoto = photos[3].thumbnailUrl;
				scope.album.photoAmount = photos.length;
			});

			scope.edit = false;

			scope.toggleEdit = function(){
				if(scope.edit===false){
					scope.edit = true;
				}
				else{
					scope.edit = false;
				}
			}

			scope.cancelEdit = function(){
				PhotoFactory.getUser(scope.album.userId)
				.then(function(user){
					scope.album.ownerName = user.name;
				});

				PhotoFactory.getAlbum(scope.album.id)
				.then(function(album){
					scope.album.title = album.title;
				});
				scope.edit = false;
			}

			scope.update = function(){
		        var upAlbum = {};
		        PhotoFactory
		        .checkUserByName(scope.album.ownerName)
		        .then(function(userId){
		            if(userId){
		                upAlbum.userId = userId;
		                upAlbum.title = scope.album.title;
		                PhotoFactory
		                .updateAlbum(scope.album)
		                .then(function(){
		                    scope.edit = false;
		                    scope.err = null;
		                });
		            }
		            else{
		                scope.err =  "User doesn't exist.  Please try again."
		            }
		        });
    		}
		}
	}
});
