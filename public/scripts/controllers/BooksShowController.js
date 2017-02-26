angular
  .module('bookApp')
  .controller('BookShowController', BookShowController);

BookShowController.$inject = [ '$routeParams', '$http' ];

function BookShowController ($http, $routeParams) {
  var vm = this;

  //get one book
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function bookSuccess(response) {
  	vm.book = response.data;
  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}