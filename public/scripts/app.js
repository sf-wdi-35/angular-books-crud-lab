angular
  .module('booksApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config  ( $routeProvider,   $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/books.html',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexController'
    })
    .when('/books/:id', {
      templateUrl: '/views/books-show.html',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowController'
    })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase:false
  });
}
