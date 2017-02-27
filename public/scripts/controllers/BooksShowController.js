angular
  .module('bookApp')
  .controller('BooksShowController', BooksShowController);

  BooksShowController.$inject = ['$http', '$routeParams', '$location'];

  function BooksShowController ($http, $routeParams, $location){
    var vm = this;

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function onSuccess(res){
      vm.book = res.data
    }, function onError(err){
      console.log("single book" + err)
    });

    vm.deleteBook = function(book){
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
        data: book
      }).then(function onSuccess(res){
        console.log("deleted")
      }, function onError(err){
        console.log("delete book" + err)
      });
    }
  }