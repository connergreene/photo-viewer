
'use strict';
window.app = angular.module('photo-viewer', ['ui.router', 'ui.bootstrap', 'ngFileUpload'])
.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
});
