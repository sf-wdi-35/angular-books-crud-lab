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
    console.log('response data: ', res);
    vm.books = res.data.books;
    console.log('ajax book: ', vm.books);
  }, function onError(res){
    console.log('failjax: ', res.data);
  });

} // closes BooksShowController
