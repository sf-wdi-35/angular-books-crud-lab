angular
  .module('bookly')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];
  function BooksShowController (  $http,   $routeParams  ) {
    var vm = this;
    vm.newBook = {};

    $http({
      method: 'GET',
      url: '/books/'+ $routeParams.id  // how can we get the id? (hint: check console log from above)
    }).then(function successCallback(json) {
      vm.book = json.data;
    });
  }
