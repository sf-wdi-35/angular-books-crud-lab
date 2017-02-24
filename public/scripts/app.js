angular
  .module('booksApp', ['ngRoute'])
  .config(config)

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books-index',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexController'
    })
    .when('/books/:id', {
      templateUrl: '/templates/books-show',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
