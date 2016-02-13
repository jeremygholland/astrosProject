var myApp =  angular.module('myApp', ['ui.router']);

myApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				controller: 'MainCtrl',
				url: '/home',
				templateUrl: 'views/test.html'
			})
			$urlRouterProvider.otherwise('home');
	}
])



myApp.controller('MainCtrl', ['$scope', function($scope){
		$scope.test = "what's up, breh"



}])
