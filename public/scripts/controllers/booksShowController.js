angular
  .module("bookley")
  .controller("BooksShowController", BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];

function BooksShowController(  $http,    $routeParams){
  var vm = this;

  $http.get('https://super-crud.herokuapp.com/books/'+$routeParams.id)
    .then(function onSuccess(response){
      vm.book = response.data;
    }, function onError(response){
      console.log("There's an error", response)
    });

    vm.editBook = function (book) {
      console.log(book);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+book._id,
      data: book
    }).then(function successCallback(json) {
      console.log('Successful edit');
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+ book._id
    }).then(function successCallback(json) {
      console.log(book);
      
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };
}
