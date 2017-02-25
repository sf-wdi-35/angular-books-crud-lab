console.log('app.js sanity check');

angular
      .module('angularBooks', ['ngRoute'])
      .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
// CONFIG //
function config($routeProvider, $locationProvider){
  console.log('angular works!');

  $routeProvider
    .when( '/', {
      templateUrl: '/views/templates/books.html',
      controller: 'BooksIndexController',
      controllerAs: 'bic'
  })
    .when( '/books/:id', {
      template: 'howdy',
      controller: 'BooksShowController',
      controllerAs: 'bsc'
  });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
