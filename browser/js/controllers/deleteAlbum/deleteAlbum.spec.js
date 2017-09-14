describe('deleteAlbumCntrl', function() {
    var scope, createController, PhotoFactory, $q;
    beforeEach(module('photo-viewer'));

    beforeEach(inject(function ($rootScope, _$q_, $injector, $state, $controller, _$location_) {
        scope = $rootScope.$new();
        $q = _$q_;
        PhotoFactory = $injector.get('PhotoFactory');
        createController = function() {
            return $controller('deleteAlbumCntrl', {
                '$scope': scope
            });
        };
    }));

    it('should call destroyAlbum from the photoFactory when delete is selected', function() {
        var controller = createController();
        var album = { id : 1 }
        
        spyOn(scope, 'deleteAlbum').and.callThrough();
        spyOn(PhotoFactory, 'destroyAlbum').and.returnValue($q.when());;
        scope.deleteAlbum(album);
        expect(PhotoFactory.destroyAlbum).toHaveBeenCalled();
    });
});