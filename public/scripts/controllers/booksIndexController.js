angular
	.module('bookApp')
	.controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];
function BooksIndexController(   $http) {
	var vm = this;

	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books'	
	}).then(function successCallback(response){
		vm.books = response.data.books;
	}, function errorCallback(error){
		console.log('There was an error getting data', error);
	});
}