
angular.module("bookApp")
  .controller("BooksShowController", BooksShowController);

BooksShowController.$inject = ["$http", "$routeParams", "$location"];
function BooksShowController( $http,   $routeParams,   $location){
  var vm = this;
  var bookId = $routeParams.id;

  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books/" +bookId
  }).then(onShowSuccess, onShowError);

  function onShowSuccess(showResponse) {
    console.log("Show data for book" + bookId, "Data:", showResponse.data);
    vm.book = showResponse.data;
  }
  function onShowError(showError) {
    console.log("Show Error", showError);
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
    }).then(onBookUpdateSuccess, onError);

    function onBookUpdateSuccess(response){
      console.log('here\'s the UPDATED data for book', bookId, ':', response.data);
      vm.book = response.data;
      $location.path('/');
    }
  };

  vm.deleteBook = function(book) {
    console.log('deleting book: ', book);
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + book._id,
    }).then(onBookDeleteSuccess, onError);

    function onBookDeleteSuccess(response){
      console.log('book delete response data:', response.data);
      $location.path('/');
    }
  };
}
