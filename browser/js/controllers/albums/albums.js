'use strict'
app.controller('AlbumsCtrl', function ($scope, $rootScope, allAlbums) {
	$scope.albums = allAlbums;
	$scope.choice = 'SORT BY';
	$scope.choices = [
		'OWNER ↓',
		'OWNER ↑',
		'SIZE ↓',
		'SIZE ↑'
	];
    $scope.reverse = true;
    $scope.propertyName = '';

	$scope.setChoice = function(choice){
		$scope.choice = choice;
		if (choice === 'SORT BY'){
			$scope.propertyName = '';
		}
		else if(choice === 'OWNER ↓'){
			$scope.propertyName = 'ownerName';
			$scope.reverse = true;
		}
		else if(choice === 'OWNER ↑'){
			$scope.propertyName = 'ownerName';
			$scope.reverse = false;
		}
		else if(choice === 'SIZE ↓'){
			$scope.propertyName = 'photoAmount';
			$scope.reverse = false;
		}
		else if(choice === 'SIZE ↑'){
			$scope.propertyName = 'photoAmount';
			$scope.reverse = true;
		}
		$scope.reverse = ($scope.propertyName) ? !$scope.reverse : false;
	}
})