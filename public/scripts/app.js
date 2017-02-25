angular
  .module('bookApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books-index.html',
      controllerAs: 'bookIndexCtrl',
      controller: 'BookIndexController'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/books-show.html',
      controllerAs: 'bookShowCtrl',
      controller: 'BookShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}