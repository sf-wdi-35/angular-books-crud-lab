angular
  .module('bookApp')
  .controller('BookIndexController', BookIndexController);

BookIndexController.$inject = [ '$http' ];

function BookIndexController ($http) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
  	console.log(response);
  	vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}