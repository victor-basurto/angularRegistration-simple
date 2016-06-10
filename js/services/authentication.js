myApp.factory('AuthenticationService', [
	'$rootScope', 
	'$firebaseAuth',
	'$firebaseObject',
	'$location', 
	'FIREBASE_URL', 
	function( $rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL ) {	// pass $scope as dependency

	// firebase connection
	var ref = new Firebase( FIREBASE_URL );
	var auth= $firebaseAuth( ref );

	auth.$onAuth( function( authUser ) {
		if ( authUser ) {
			var userRef = new Firebase( FIREBASE_URL + 'user/' + authUser.uid );
			var userObj = $firebaseObject( userRef );

			$rootScope.currentUser = userObj;
		} else {
			$rootScope.currentUser = '';
		}
	});

	return {
		login: function( user ) {
			auth.$authWithPassword({
				email: user.email,
				password: user.password
			}).then( function( regUser ) {	// if success, path to success
				$location.path( '/success' );
			}).catch( function( err ) {
				$rootScope.message = err.message;
			});
			$rootScope.message = 'Message ' + user.email;
		},	// login

		register: function( user ) {
			// create user
			auth.$createUser({
				email: user.email,
				password: user.password
			}).then(function( regUser ) {	// return a promise with an object to make sure user is created

				var regRef = new Firebase( FIREBASE_URL + 'user' )
					.child( regUser.uid ).set({
						date: Firebase.ServerValue.TIMESTAMP,
						regUser: regUser.uid,
						firstname: user.firstname,
						lastname: user.lastname,
						email: user.email
					})
				// welcome msg
				$rootScope.message = 'Hi ' + user.firstname + 'Thanks for register.';
			}).catch(function( err ) {		// catch error
				// error msg
				$rootScope.message = err.message;
			});	
		}
	}
}]); // Factory