describe('newPhotoModalCntrl', function() {
    var scope, createController, PhotoFactory, $q;
    beforeEach(module('photo-viewer'));

    beforeEach(inject(function ($rootScope, _$q_, $injector, $state, $controller, _$location_) {
        scope = $rootScope.$new();
        $q = _$q_;
        PhotoFactory = $injector.get('PhotoFactory');
        createController = function() {
            return $controller('newPhotoModalCntrl', {
                '$scope': scope
            });
        };
    }));

    it('should call addPhoto when photo info is submitted', function() {
        var controller = createController();
        var photoToAdd = [{
                        albumId: scope.albumId,
                        url: "http://placehold.it/600/24f355",
                        thumbnailUrl: "http://placehold.it/150/24f355"
        }];
        
        spyOn(scope, 'upload').and.callThrough();
        spyOn(PhotoFactory, 'addPhoto').and.returnValue($q.when());;
        scope.upload(photoToAdd);
        expect(PhotoFactory.addPhoto).toHaveBeenCalled();
    });
});