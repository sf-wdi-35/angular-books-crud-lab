angular
  .module('booksApp')
  .controller('BooksShowController', BooksShowController);

var db = "https://super-crud.herokuapp.com/books"

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController(   $http,   $routeParams,  $location){

  var vm = this;

  vm.book = {};

  vm.editedBook = {};

  vm.editing = function(){
    vm.editedBook = Object.assign({}, vm.book);
  }

  vm.editBook = function(){
    $http({
      method: 'PUT',
      url: `${db}/${$routeParams.id}`,
      data: vm.editedBook
    }).then(function successCallback(response){
      vm.book = response.data
    }), function errorCallback(response){
      console.log(response);
    }
  }

  vm.deleteBook = function(){
    $http({
      method: 'DELETE',
      url: `${db}/${$routeParams.id}`,
    }).then(function successCallback(response){
      $location.path('/')
    }), function errorCallback(response){
      console.log(response)
    }
  }

  $http({
    method: 'GET',
    url: `${db}/${$routeParams.id}`,
  }).then(function successCallback(response) {
    vm.book = response.data
  }), function errorCallback(response) {
    console.log(response)
  }

}
