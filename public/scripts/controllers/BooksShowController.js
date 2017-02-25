console.log("BooksShowController running!");

angular
  .module("angularBooks")
  .controller("BooksShowController", BooksShowController);


BooksShowController.$inject = ["$http", "$routeParams"];

console.log("ABOUT to hit BooksShowController function ");


function BooksShowController(   $http,   $routeParams ) {
  console.log("BooksShowController function evaluating");

  var vm = this;
  console.log($routeParams);

  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books/" + $routeParams.id
  }).then(function successCallback(json) {
    console.log(json.data);
    vm.book = json.data;
  }); // end of GET request
}