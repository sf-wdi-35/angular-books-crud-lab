angular
	.module('bookApp')
	.controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];
function BooksShowController (  $http, 	 $routeParams) {
	var vm = this;
	var bookId = $routeParams.id;

	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books/' + bookId,
	}).then(function successCallback(response){
		vm.book = response.data;
		console.log(vm.book)
	}, function errorCallback(error) {
		console.log('Error', error);
	})


}