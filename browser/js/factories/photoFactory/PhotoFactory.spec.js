describe('PhotoFactory tests', function () {
    
	beforeEach(module('photo-viewer'));
    var PhotoFactory, httpBackend;
    beforeEach(inject(function($injector, _$httpBackend_) {
           httpBackend =  _$httpBackend_;
           PhotoFactory = $injector.get('PhotoFactory');
    }));

    describe('getAlbums', function () {
        it("should retrieve all albums", inject(function () {
        	var mockResponse = {
            	data: [
            		{userId: 1,id: 1,title: "quidem molestiae enim"},
					{userId: 1,id: 2,title: "sunt qui excepturi placeat culpa"},
					{userId: 1, id: 3, title: "omnis laborum odio"}
				]
        	};

            httpBackend.expectGET('http://jsonplaceholder.typicode.com' + '/albums')
            .respond(mockResponse);

            PhotoFactory.getAlbums(function (data) {
                expect(data).toEqual(mockResponse);
            });
            httpBackend.flush();
        }))
    });

    describe('getAlbum', function () {
        it("should retrieve an album", inject(function () {
        	var mockResponse = {
            	data: {userId: 1,id: 1,title: "quidem molestiae enim"}
        	};

            httpBackend.expectGET('http://jsonplaceholder.typicode.com' + '/albums/' + 1)
            .respond(mockResponse);

            PhotoFactory.getAlbum(1, function (data) {
                expect(data).toEqual(mockResponse);
            });
            httpBackend.flush();
        }))
    });

    describe('getPhotos', function () {
        it("should retrieve all photos", inject(function () {
        	var mockResponse = {
            	data: [
            		{albumId: 1, id: 1, title: "accusamus beatae", url: "http://placehold.it/600/92c952", thumbnailUrl: "http://placehold.it/150/92c952"},
					{albumId: 1, id: 2, title: "reprehenderit est", url: "http://placehold.it/600/771796", thumbnailUrl: "http://placehold.it/150/771796"},
					{albumId: 1, id: 3, title: "officia porro", url: "http://placehold.it/600/24f355", thumbnailUrl: "http://placehold.it/150/24f355"}
				]
        	};

            httpBackend.expectGET('http://jsonplaceholder.typicode.com' + '/photos')
            .respond(mockResponse);

            PhotoFactory.getPhotos(function (data) {
                expect(data).toEqual(mockResponse);
            });
            httpBackend.flush();
        }))
    });

    describe('getUser', function () {
        it("should retrieve a user", inject(function () {
        	var mockResponse = {
            	data: {id: 1, name: "Leanne Graham"}
            }

            httpBackend.expectGET('http://jsonplaceholder.typicode.com' + '/users/' + 1)
            .respond(mockResponse);

            PhotoFactory.getUser(1, function (data) {
                expect(data).toEqual(mockResponse);
            });
            httpBackend.flush();
        }))
    });

    describe('getPhotosInAlbum', function () {
        it("should retrieve all photos in album", inject(function () {
            var mockResponse = {
                data: [
                    {albumId: 1,id: 1,title: "quidem molestiae enim", url: "http://placehold.it/600/771796", thumbnailUrl: "http://placehold.it/150/771796"},
                    {albumId: 1,id: 2,title: "sunt qui excepturi placeat culpa", url: "http://placehold.it/600/771796", thumbnailUrl: "http://placehold.it/150/771796"},
                    {albumId: 1, id: 3, title: "omnis laborum odio", url: "http://placehold.it/600/771796", thumbnailUrl: "http://placehold.it/150/771796"}
                ]
            };

            httpBackend.expectGET('http://jsonplaceholder.typicode.com/albums/' + 1 + '/photos')
            .respond(mockResponse);

            PhotoFactory.getPhotosInAlbum(1, function (data) {
                expect(data).toEqual(mockResponse);
            });
            httpBackend.flush();
        }))
    });

    describe('getAlbumsByUser', function () {
        it("should retrieve all albums owned by the user", inject(function () {
        	var mockResponse = {
            	data: [
            		{userId: 1,id: 1,title: "quidem molestiae enim"},
					{userId: 1,id: 2,title: "sunt qui excepturi placeat culpa"},
					{userId: 1, id: 3, title: "omnis laborum odio"}
				]
        	};

            httpBackend.expectGET('http://jsonplaceholder.typicode.com/users/' + 1 + '/albums')
            .respond(mockResponse);

            PhotoFactory.getAlbumsByUser(1, function (data) {
                expect(data).toEqual(mockResponse);
            });
            httpBackend.flush();
        }))
    });



    
    afterEach(function() {
    	httpBackend.verifyNoOutstandingExpectation();
    	httpBackend.verifyNoOutstandingRequest();
   	});
});