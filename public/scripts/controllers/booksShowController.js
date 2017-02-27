angular
  .module('bookly')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
  function BooksShowController ($http,   $routeParams,  $location  ) {
    var vm = this;
    var bookId = $routeParams.id;

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/'+ bookId  
    }).then(function successCallback(json) {
      vm.book = json.data;
    });
  }
