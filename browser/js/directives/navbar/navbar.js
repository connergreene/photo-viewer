'use strict';

app.directive('navbar', function ($rootScope, $state) {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/navbar/navbar.html',
        controller: "navbarCntrl"
    };
});