angular
  .module("angularBooks", ["ngRoute"])
  .config(config);

config.$inject = ["$routeProvider", "$locationProvider"]

function config(   $routeProvider,  $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/templates/books-index.html",
      controllerAs: "bic",
      controller: "BooksIndexController"
    })
    .when("/books/:id", {
      templateUrl: "/templates/books-show.html",
      controllerAs: "bsc",
      controller: "BooksShowController"
    })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
}
