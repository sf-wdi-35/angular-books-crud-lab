angular
  .module('booksApp')
  .controller('BooksShowController', BooksShowController)

BooksShowController.$inject=['$http','$routeParams', '$location'];

function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id
  vm.books = [];
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ bookId
  }).then(function onBookShowSuccess(response) {
    vm.book = response.data;
  }, function onError(response){
 });

 vm.updateBook = function(bookToUpdate) {
     $http({
       method: 'PUT',
       url: 'https://super-crud.herokuapp.com/books/'+bookToUpdate._id ,
       data: {
         title: bookToUpdate.title,
         author: bookToUpdate.author,
         image: bookToUpdate.image,
         releaseDate: bookToUpdate.releaseDate
       }
     }).then(function onBookUpdateSuccess(response){
       vm.book = response.data; // save the updated book to the DB
       $location.path('/'); // redirect to homepage after book is saved
     }, function onError(response){
     });
  }

  vm.deleteBook = function (bookToDelete) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+ bookToDelete._id,
    }).then(function onDeleteBookSuccess(response) {
      var index = vm.books.indexOf(bookToDelete);
      vm.books.splice(index, 1); // remove book from DB
      $location.path('/'); //redirect to homepage after book is removed
    }, function onError(response) {
    });
  }

}
