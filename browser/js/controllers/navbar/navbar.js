'use strict'
app.controller('navbarCntrl', function ($scope, $location, PhotoFactory) {
    $scope.showSearch = false;
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.toggleSearch = function(){
        if($scope.showSearch === false){
            $scope.showSearch = true;
        }
        else{
            $scope.showSearch = false;
        }
    }
});