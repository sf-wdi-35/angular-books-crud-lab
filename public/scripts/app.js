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

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
}
