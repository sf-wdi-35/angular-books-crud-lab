console.log("BooksIndexController running!!!!")

angular
  .module("angularBooks")
  .controller("BooksIndexController", BooksIndexController);

BooksIndexController.$inject = ["$http"];
function BooksIndexController(   $http ) {
  var vm = this;

  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books"
  }).then(function successCallback(response) {
    console.log("Here is the response.data.books: ", response.data.books);
    vm.books = response.data.books;
    console.log("here is the vm.books: ", vm.books);
  }, function errorCallback(response) {
    console.log("Error getting the data: ", response);
  }); // end of GET request

}; // end of BooksIndexController


