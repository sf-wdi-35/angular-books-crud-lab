angular
  .module('booksApp', ['ngRoute'])
  .config(config)

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    // at path '/' render books-index html in ng-view
    .when('/', {
      templateUrl: '/templates/books-index.html',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexController'
    })
    // render books-show html at path '/books/:id'
    .when('/books/:id', {
      templateUrl: '/templates/books-show.html',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowController'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
