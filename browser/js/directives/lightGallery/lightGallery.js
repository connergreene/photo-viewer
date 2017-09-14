'use strict'
app.directive('lightgallery', function ($state) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			if (scope.$last) {
        		element.parent().lightGallery({
					thumbnail:true,
					showThumbByDefault: false
        		});
      		}
		}
	}
});