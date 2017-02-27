angular
  .module('bookApp')
  .controller('BooksShowController', BooksShowController);

  BooksShowController.$inject = ['$http', '$routeParams', '$location'];

  function BooksShowController ($http, $routeParams, $location){
    var vm = this;

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function onSuccess(res){
      vm.book = res.data
    }, function onError(err){
      console.log(err)
    });
  }