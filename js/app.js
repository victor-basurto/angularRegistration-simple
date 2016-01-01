var myApp = angular.module('myApp', []);

/**
 * MyApp Controller
 */
myApp.controller('AppController', ['$scope', function($scope){
	$scope.message = 'welcome to my app';
}]);