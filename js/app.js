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
			.state('retired/biggio', {
				controller: 'MainCtrl',
				url: '/retired/biggio',
				templateUrl: 'views/retired/7.html'
			})
			.state('retired/bagwell', {
				controller: 'MainCtrl',
				url: '/retired/bagwell',
				templateUrl: 'views/retired/5.html'
			})
			$urlRouterProvider.otherwise('home');
	}
])



myApp.controller('MainCtrl', ['$scope', function($scope){
		$scope.test = "what's up, breh"



}])
