angular
  .module('booksApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController($http) {
  var vm = this;
  vm.newBook ={};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
      vm.books = response.data.books;
    }, function errorCallback(response) {
      console.log('error: ', response);
    });

  vm.createBook = function () {
  $http({
    method: 'POST',
    url: 'https://super-crud.herokuapp.com/books',
    data: vm.newBook,
  }).then(function successCallback(response) {
      vm.books.push(response.data.books);
    }, function errorCallback(response) {
      console.log('error: ', response);
    });
  }

}
