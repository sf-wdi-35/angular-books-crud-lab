// BooksShowController.js //
angular
    .module('angularBooks')
    .controller('BooksShowController', BooksShowController);


BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location){
  console.log('ima b.s.c.');

  var vm = this;
  var bookId = $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(function onSuccess(res){
    vm.book = res.data;
    console.log('ajax book: ', vm.book);
  }, function onError(res){
    console.log('failjax: ', res.data);
  });

  vm.deleteBook = function(book){
    console.log('deleting: ', book);

    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function onSuccess(res){
      console.log('book deleted:', res.data);
      $location.path('/');
    }, function onError(res){
      console.log('failjax delete', res.data);
    })
  };

} // closes BooksShowController
