angular
  .module('booksApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = [ '$http', '$routeParams'];
function BooksShowController (   $http,   $routeParams  ) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function onSuccess(res) {
    vm.book = res.data;
  }, function onError(res){
    console.log(res);
  });

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + book._id
    }).then(function onSuccess (res) {
      //vm.book.splice((vm.book.indexOf(book)), 1);
      console.log('deleted', res)
    }, function onError(res) {
      console.log(res);
    });
  }

  vm.editBook = function (book) {
  $http({
    method: 'PUT',
    url: 'https://super-crud.herokuapp.com/books/' + book._id,
    data: book
  }).then(function onSuccess(res) {
  }, function onError(res) {
    console.log(res);
  });
}

  vm.goBack = function () {
    $location.history.back();
  }
}
