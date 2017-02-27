angular
  .module('booksApp')
  .controller('BooksShowController', BooksShowController)

BooksShowController.$inject=['$http', '$routeParams', '$location'];

function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ bookId
  }).then(onBookShowSuccess, onError);

  function onBookShowSuccess(response) {
    console.log('book data:', bookId, ':', response.data);
    vm.book = response.data;
  }
  function onError(response){
   console.log('error: ', response);
  }

 vm.updateBook = function(bookToUpdate) {
     console.log('updating book: ', bookToUpdate);
     $http({
       method: 'PUT',
       url: 'https://super-crud.herokuapp.com/books/'+bookToUpdate._id ,
       data: {
         title: bookToUpdate.title,
         author: bookToUpdate.author,
         image: bookToUpdate.image,
         releaseDate: bookToUpdate.releaseDate
       }
     }).then(onBookUpdateSuccess, onError);

     function onBookUpdateSuccess(response){
       console.log('updated book:', bookId, ':', response.data);
       vm.book = response.data;
       $location.path('/');
     }

     function onError(response){
       console.log('error:', response);
     }
   };
 }
