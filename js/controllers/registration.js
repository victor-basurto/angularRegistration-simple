myApp.controller('RegistrationController', [
	'$scope', 
	'AuthenticationService',
	function( $scope, AuthenticationService ) {	

	// Login success
	$scope.login = function() {
		AuthenticationService.login( $scope.user );
	} // login

	// registration success
	$scope.register = function() {
		AuthenticationService.register( $scope.user );
	} // register
}]); // Controller