angular
  .module('books')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];

function BooksShowController ($http, $routeParams, $location) {
  var vm = this;
  var bookId= $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' +bookId,
  }).then(successCallback, errorCallback);

  function successCallback(response){
    console.log('data for book', bookId, ':', response.data);
    vm.book = response.data;
  }

  function errorCallback(error){
     console.log('error alert!: ', error);
  }

  vm.updateBook = function(bookToUpdate) {
    console.log('updating book: ', bookToUpdate);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookToUpdate._id,
      data: {
        title : bookToUpdate.title,
        author : bookToUpdate.author,
        image : bookToUpdate.image,
        releaseDate : bookToUpdate.releaseDate
      }
    }).then(BookUpdateSuccess, errorCallback);

    function BookUpdateSuccess(response){
      console.log('updated data for book', bookId, ':', response.data);
      vm.book = response.data;
      $location.path('/');
    }
  };

  vm.deleteBook = function(book) {
    console.log('deleted book: ', book);
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + book._id,
    }).then(onBookDeleteSuccess, errorCallback);

    function onBookDeleteSuccess(response){
      console.log('book delete response data:', response.data);
      $location.path('/');
    }
  };
}