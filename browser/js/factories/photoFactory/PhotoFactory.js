'use strict'
app.factory('PhotoFactory', function($http) {
	var root = 'http://jsonplaceholder.typicode.com';

	return {
		getAlbums: function(){
			return $http({
				url:  root + '/albums',
				method: 'GET'
			})
			.then(res => res.data)
		},

		getAlbum: function(albumId){
			return $http({
				url: root + '/albums/' + albumId,
				method: 'GET'
			})
			.then(res => res.data);
		},

		getPhotos: function(){
			return $http({
				url: root + '/photos',
				method: 'GET'
			})
			.then(res => res.data);
		},

		getUser: function(userId){
			return $http({
				url: root + '/users/' + userId,
				method: 'GET'
			})
			.then(res => res.data);
		},
		
		checkUserByName: function(userName){
			return $http({
				url: root + '/users',
				method: 'GET'
			})
			.then(function(res){
				for(var i = 0; i <res.data.length; i++){
					if(res.data[i].name.toLowerCase() === userName.toLowerCase()){
						return res.data[i].id;
					}
				}
				return false;
			});
		},

		getPhotosInAlbum: function(albumId){
			return $http({
				url: root + '/albums/' + albumId + '/photos',
				method: 'GET'
			})
			.then(res => res.data);
		},

		getAlbumsByUser: function(userId){
			return $http({
				url: root + '/users/' + userId + '/albums',
				method: 'GET'
			})
			.then(res => res.data);
		},
		
		createAlbum: function(album){
			return $http({
				url: root + '/albums',
				method: 'POST',
				data: {
					userId: album.userId,
					title: album.title
				}
			})
			.then(res => res.data)
		},

		updateAlbum: function(album){
			return $http({
				url: root + '/albums/' + album.id,
				method: 'PUT',
				data: {
					userId: album.userId,
					title: album.title
				}
			})
			.then(res => res.data)
		},

		destroyAlbum: function(albumId){
			return $http({
				url: root + '/albums/' + albumId,
				method: 'DELETE'
			})
			.then(res => res.data)
		},

		addPhoto: function(photo){
			return $http({
				url: root + '/photos',
				method: 'POST',
				data: {
					albumId: photo.albumId,
					url: photo.url,
					thumbnailUrl: photo.thumbnailUrl
				}
			})
			.then(res => res.data)
		},

		updatePhoto: function(photo){
			return $http({
				url: root + '/photos/' + photo.id,
				method: 'PUT',
				data: {
					albumId: photo.albumId,
					title: photo.title
				}
			})
			.then(res => res.data)
		},

		destroyPhoto: function(photoId){
			return $http({
				url: root + '/photos/' + photoId,
				method: 'DELETE'
			})
			.then(res => res.data)
		}
	}
})