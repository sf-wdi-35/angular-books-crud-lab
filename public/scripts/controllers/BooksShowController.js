console.log("BooksShowController running!");

angular
  .module("angularBooks")
  .controller("BooksShowController", BooksShowController);

BooksShowController.$inject = ["$http", "$routeParams"];

function BooksShowController(   $http,   $routeParams ) {
  var vm = this;

  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books/" + $routeParams.id
  }).then(function successCallback(json) {
    console.log(json.data);
    vm.book = json.data;
  }); // end of GET request
}