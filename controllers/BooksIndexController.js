angular
  .module('booksApp')
  .controller('BooksIndexController', BooksIndexController);

var db = "https://super-crud.herokuapp.com/books"

BooksIndexController.$inject = ['$http'];
function BooksIndexController(   $http ){

  var vm = this;

  vm.books = [];

  vm.newBook = {};

  vm.createBook = function(){
    $http({
      method: 'POST',
      url: db,
      data: vm.newBook
    }).then(function successCallback(response){
      vm.books.push(response.data)
      vm.newBook = {}
    }), function errorCallback(response){
      console.log(response)
    }
  }

  $http({
    method: 'GET',
    url: db
  }).then(function successCallback(response) {
    vm.books = response.data.books
  }), function errorCallback(response) {
    console.log(response)
  }

}
