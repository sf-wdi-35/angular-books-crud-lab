angular
  .module('bookie')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController (  $http,   $routeParams,   $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ $routeParams.id
  }).then(function successCallback(response) {
    vm.book = response.data;
  }, function errorCallBack(response) {
    console.log('There was an error getting the single book data', response);
  });

  // edit current book
  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+ vm.book._id,
      data: vm.book
    }).then(function successCallback(json) {

    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  // redirect home after edit is complete.
  vm.goHome = function() {
    $location.path( '/' );
  };
}