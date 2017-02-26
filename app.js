angular
  .module('booksApp', ['ngRoute']) // ngRoute allows us to configure client-side routes in our app.
  .config(config) // for the app, use this dependency and configuration

/* ROUTES */

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config(   $routeProvider,  $locationProvider   ) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/books-index.html',
        controllerAs: 'booksIndexCtrl',
        controller: 'BooksIndexController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
