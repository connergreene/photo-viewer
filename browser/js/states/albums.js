'use strict';
app.config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'js/templates/albums.html',
		controller: 'AlbumsCtrl',
		resolve: {
			allAlbums: function (PhotoFactory) {
				return PhotoFactory.getAlbums();
			}
		}
	});
});