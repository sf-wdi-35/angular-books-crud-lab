angular
  .module('booksApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController (  $http,   $routeParams,   $location  ) {
  var vm = this;
  var bookId = $routeParams.id;

  // Render single book
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(function successCallback(res) {
    vm.book = res.data;
  });

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function successCallback(json) {
      //redirects back to homepage
      $location.path('/');
    }, function errorCallback(response) {
      console.log('error: ', response);
    });
  }

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookId,
      data: book
    }).then(function successCallback(json) {
    }, function errorCallback(response) {
      console.log('error: ', response);
    });
  }


}
