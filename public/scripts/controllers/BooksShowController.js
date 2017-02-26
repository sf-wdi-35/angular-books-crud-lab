angular
  .module('bookApp')
  .controller('BookShowController', BookShowController);

BookShowController.$inject = [ '$http', '$routeParams', '$location' ];

function BookShowController ($http, $routeParams, $location) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function bookSuccess(response) {
  	vm.book = response.data;
  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });

  vm.deleteBook = function(book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function deleteSuccess(response) {
      $location.path('/')
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }
  

}