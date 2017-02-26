console.log("BooksIndexController running!!!!")

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


   $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books"
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log("here is vm.books: ", vm.books);
  }, function errorCallback(response) {
    console.log("Error getting the data: ", response);
  }); // end of GET all request




  vm.editBook = function(book) {
    $http({
      method: "PUT",
      url: "https://super-crud.herokuapp.com/books" + book._id,
      data: book
    }).then(function successCallback(response) {
      console.log("Edit was successful!");
      console.log("response.data ", response.data);
      }, function errorCallback(response) {
      console.log("There was an error editing the  book!");
    });
  } // end of PUT request


  vm.deleteBook = function(book) {
    $http({
      method: "DELETE",
      url: "https://super-crud.herokuapp.com/books" + book._id
    }).then(function successCallback(json){
      var index = vm.book.indexOf(book);
      vm.book.splice(index, 1);
    }, function errorCallback(response) {
      console.log("there was an error deleting the book :(");
    });
  } // end of DELETE request

}; // end of BooksIndexController


