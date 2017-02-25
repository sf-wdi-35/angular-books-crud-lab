

angular
  .module('bookApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books-index.html',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexController'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/books-show.html',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}