angular
	.module('bookApp', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider, 	 $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/templates/books-index.html',
			controller: 'BooksIndexController',
			controllerAs: 'booksIndexCtrl'
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}