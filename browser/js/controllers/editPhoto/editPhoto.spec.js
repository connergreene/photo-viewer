describe('editPhotoModalCntrl', function() {
    var scope, createController, PhotoFactory, $q;
    beforeEach(module('photo-viewer'));

    beforeEach(inject(function ($rootScope, _$q_, $injector, $state, $controller, _$location_) {
        scope = $rootScope.$new();
        $q = _$q_;
        PhotoFactory = $injector.get('PhotoFactory');
        createController = function() {
            return $controller('editPhotoModalCntrl', {
                '$scope': scope
            });
        };
    }));

    it('should call getAlbum factory function to display current album in modal', function() {
        var controller = createController();
        scope.photo = {albumId:1};
        
        spyOn(scope, 'toggleShowModal').and.callThrough();
        spyOn(PhotoFactory, 'getAlbum').and.returnValue($q.when());
        scope.toggleShowModal();
        expect(PhotoFactory.getAlbum).toHaveBeenCalled();
    });

    it('should call getAlbums after finding current album to display in dropdown', function() {
        var controller = createController();
        scope.photo = {albumId:1};

        spyOn(PhotoFactory, 'getAlbums').and.callThrough();
        PhotoFactory
        .getAlbum(scope.photo.albumId)
        .then(function(currentAlbum){
            scope.albumChoice = currentAlbum;
        })
        .then(function(){
            expect(PhotoFactory.getAlbums).toHaveBeenCalled();
        })
    });

    it('should call updatePhoto when photo info is submitted', function() {
        var controller = createController();
        var newPhotoInfo = {id : 1, albumId : 2, title:"bye world!"};
        scope.albumChoice = {id : 1};
        scope.photo = { id : 1, albumId:1, title:"hello world!"};
        
        spyOn(scope, 'submit').and.callThrough();
        spyOn(PhotoFactory, 'updatePhoto').and.returnValue($q.when());;
        scope.submit(newPhotoInfo);
        expect(PhotoFactory.updatePhoto).toHaveBeenCalled();
    });
});