describe('AlbumCtrl', function() {
    var scope, $location, createController;
    beforeEach(function(){
        var theAlbum = {};
        var albumForTitle = {};
        module('photo-viewer', function($provide){
            $provide.value('theAlbum', theAlbum);
            $provide.value('albumForTitle', albumForTitle);

        })
    })

    beforeEach(inject(function ($rootScope, $injector, $state, $controller, _$location_) {
        scope = $rootScope.$new();
        state= $state;
        
        createController = function() {
            return $controller('AlbumCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should find a photo when searching by title', function() {
        var controller = createController();
        var photo = {title: "this is the title"};
        var correctSearch = "this is the title";
        var wrongSearch = "this is not the title";
        //photo search
        expect(scope.photoFilter(photo, correctSearch)).toBe(true);
        expect(scope.photoFilter(photo, wrongSearch)).toBe(false);
    });
});