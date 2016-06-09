var myApp = angular.module( 'myApp', 
	[ 'ngRoute', 'firebase' ] )
	.constant('FIREBASE_URL', 'https://angregistration2016.firebaseIO.com/');	// connection to database

/**
 * MyApp Configuration / Routing
 */
myApp.config( ['$routeProvider', function( $routeProvider ) {
	$routeProvider
		.when('/login', {
			templateUrl: './views/login.html',		// get login.html
			controller: 'RegistrationController'	// use RegistrationController
		})
		.when('/register', {
			templateUrl: './views/register.html',	// get register.html
			controller: 'RegistrationController'	// use RegistrationController
		})
		.when('/success', {
			templateUrl: './views/success.html',	// get success.html
			controller: 'SuccessController'			// use SuccessController
		})
		.otherwise({
			redirectTo: '/login'					// get login 
		})
}]);
