describe('newAlbumModalCntrl', function() {
    var scope, createController, PhotoFactory, $q;
    beforeEach(module('photo-viewer'));

    beforeEach(inject(function ($rootScope, _$q_, $injector, $state, $controller, _$location_) {
        scope = $rootScope.$new();
        $q = _$q_;
        PhotoFactory = $injector.get('PhotoFactory');
        createController = function() {
            return $controller('newAlbumModalCntrl', {
                '$scope': scope
            });
        };
    }));

    it('should check to see if the user exists', function() {
        var controller = createController();
        scope.newAlbum = {
                        albumId: scope.albumId,
                        ownerName: "Leanne Graham",
                        userId: 1
        };
        
        spyOn(scope, 'submit').and.callThrough();
        spyOn(PhotoFactory, 'checkUserByName').and.callThrough().and.returnValue($q.when());
        scope.submit(scope.newAlbum);
        expect(PhotoFactory.checkUserByName).toHaveBeenCalled();
        
    });

    it('should call createAlbum after checking the name', function() {
        var controller = createController();
        scope.newAlbum = {
                        albumId: scope.albumId,
                        ownerName: "Leanne Graham",
                        userId: 1
        };
        
        spyOn(PhotoFactory, 'createAlbum').and.returnValue($q.when()).and.callThrough();
        PhotoFactory
        .checkUserByName(scope.newAlbum.ownerName)
        .then(function(userId){
            expect(PhotoFactory.createAlbum).toHaveBeenCalled();
        });

    });
});