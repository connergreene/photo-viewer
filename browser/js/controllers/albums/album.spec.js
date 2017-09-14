describe('AlbumsCtrl', function() {
    var scope, createController;
    beforeEach(function(){
        var allAlbums = {};
        module('photo-viewer', function($provide){
            $provide.value('allAlbums', allAlbums);
        })
    })

    beforeEach(inject(function ($rootScope, $injector, $state, $controller, _$location_) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('AlbumsCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should select the correct sort option', function() {
        var controller = createController();
        var choice = 'OWNER ↓';
        scope.setChoice(choice);
        expect(scope.propertyName).toBe('ownerName');
        expect(scope.reverse).toBe(false);
    });
});