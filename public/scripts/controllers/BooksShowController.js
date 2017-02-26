angular
  .module('bookApp')
  .controller('BookShowController', BookShowController);

BookShowController.$inject = [ '$http' ];

function BookShowController ($http) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
  	console.log("look at me!");
  	vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}