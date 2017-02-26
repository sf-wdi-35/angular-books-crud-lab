console.log("app.js is working!")
angular
  .module('bookApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/templates/books-index.html',
      controllerAs: 'bookIndexController',
      controller: 'BookIndexController'
    })
    .when('/books/:id', {
      templateUrl: '/templates/books-show.html',
      controllerAs: 'bookShowController',
      controller: 'BookShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
