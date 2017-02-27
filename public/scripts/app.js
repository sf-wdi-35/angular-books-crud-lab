console.log("JS works")

angular.module("bookApp", ["ngRoute"])
  .config(config);

  config.$inject = ["$routeProvider", "$locationProvider"];
  function config(   $routeProvider,   $locationProvider  ) {
    $routeProvider
      .when("/", {
        templateUrl: "/templates/books-index.html",
        controller: "BooksIndexController",
        controllerAs: "booksIndexCtrl",
      })
    .otherwise({
      redirectTo: "/"
    });

    $locationProvider
      .html5Mode({
        enambled: true,
        requireBase: false
      });
  }
