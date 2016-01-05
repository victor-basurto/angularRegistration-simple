myApp.controller('RegistrationController', 
	['$scope', '$firebaseAuth', 'FIREBASE_URL', 
	function( $scope, $firebaseAuth, FIREBASE_URL ) {	// pass $scope as dependency

	// firebase connection
	var ref = new Firebase( FIREBASE_URL );
	var auth= $firebaseAuth( ref );

	// Login success
	$scope.login = function() {
		$scope.message = "Welcome " + $scope.user.email;		// message
	}

	// registration success
	$scope.register = function() {

		// create user
		auth.$createUser({
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function( regUser ) {	// return a promise with an object to make sure user is created
			// welcome msg
			$scope.message = "Hi " + $scope.user.firstname + 'Thanks for register.';
		}).catch(function( err ) {		// catch error
			// error msg
			$scope.message = err.message;
		}); // create user
	} // register
}]); // Controller