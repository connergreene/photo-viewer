'use strict'
app.config(function ($stateProvider) {
	$stateProvider.state('album', {
		url: '/album/:albumId',
		templateUrl: 'js/templates/albumPhotos.html',
		controller: 'AlbumCtrl',
		resolve: {
			theAlbum: function (PhotoFactory, $stateParams) {
				return PhotoFactory.getPhotosInAlbum($stateParams.albumId);
			},
			albumForTitle: function(PhotoFactory, $stateParams){
				return PhotoFactory.getAlbum($stateParams.albumId);
			}
		}
	});
});
