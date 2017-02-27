console.log("BooksShowController running!");

angular
  .module("angularBooks")
  .controller("BooksShowController", BooksShowController);

BooksShowController.$inject = ["$http", "$routeParams", "$location"];

function BooksShowController(   $http,   $routeParams, $location ) {
  var vm = this;

  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books/" + $routeParams.id
  }).then(function successCallback(json) {
    console.log(json.data);
    vm.book = json.data;
  }); // end of GET request


  vm.editBook = function(book) {
    $http({
      method: "PUT",
      url: "https://super-crud.herokuapp.com/books/" + book._id,
      data: {
        title: book.title,
        author: book.author,
        releaseDate: book.releaseDate,
        image: book.image
      }
    }).then(function successCallback(response) {
        console.log("Edit was successful!");
        console.log("response.data ", response.data);
        }, function errorCallback(response) {
        console.log("There was an error editing the  book!");
      });
    }// end of PUT request


  vm.deleteBook = function(book) {
    $http({
      method: "DELETE",
      url: "https://super-crud.herokuapp.com/books/" + book._id
    }).then(function successCallback(response){
      console.log("Delete successful: ", response.data);
      $location.path('/');
    }, function errorCallback(response) {
      console.log("there was an error deleting the book :(");
    });
  } // end of DELETE request
}

