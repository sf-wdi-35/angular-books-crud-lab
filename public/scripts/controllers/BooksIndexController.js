angular
  .module("angularBooks")
  .controller("BooksIndexController", BooksIndexController);

BooksIndexController.$inject = ["$http"];
function BooksIndexController(   $http ) {
  var vm = this;
  vm.newBook = {};

  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books"
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log("here is the vm.books: ", vm.books);
  }, function errorCallback(response) {
    console.log("Error getting the data: ", response);
  }); // end of GET all request


  vm.createBook = function() {
    console.log("createBook function running!");
    $http({
      method: "POST",
      url: "https://super-crud.herokuapp.com/books",
      data: vm.newBook
    }).then(function successCallback(response) {
        console.log("Book created successfully!");
        vm.books.push(response.data);
        }, function errorCallback(response) {
        console.log("There was an error creating the book!");
      });
    }// end of POST request

}; // end of BooksIndexController


