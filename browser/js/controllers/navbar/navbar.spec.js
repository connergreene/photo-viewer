describe('navbarCntrl', function() {
    var scope, $location, createController;
    beforeEach(module('photo-viewer'));

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();


        createController = function() {
            return $controller('navbarCntrl', {
                '$scope': scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();
        $location.path('/');
        expect($location.path()).toBe('/');
        expect(scope.isActive('/')).toBe(true);
        expect(scope.isActive('/album')).toBe(false);
    });
});