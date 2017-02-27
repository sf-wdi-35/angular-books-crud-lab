angular
  .module("bookley")
  .controller("BooksIndexController", BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController($http){
  var vm = this;

  $http.get('https://super-crud.herokuapp.com/books')
    .then(function onSuccess(response){
      vm.books = response.data.books;
    }, function onError(response){
      console.log("There's an error", response)
    });
}
