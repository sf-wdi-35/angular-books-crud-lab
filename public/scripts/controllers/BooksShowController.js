console.log('show controlla');

angular
  .module('booksApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController (  $http,   $routeParams,   $location  ) {
  var vm = this;
  var bookId = $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(function successCallback(res) {
    vm.book = res.data;
  });

  vm.deleteBook = function (song) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function successCallback(json) {
      var index = vm.books.indexOf(book);
      vm.books.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookId,
      data: book
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }


}
