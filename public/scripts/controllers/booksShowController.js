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
      vm.book.splice((vm.book.indexOf(book)), 1);
    }, function onError(res) {
      console.log(res);
    });
  }
}
