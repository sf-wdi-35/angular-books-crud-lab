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
		})
		.when('/books/:id', {
			templateUrl: '/templates/books-show.html',
			controller: 'BooksShowController',
			controllerAs: 'booksShowCtrl'
		})

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}