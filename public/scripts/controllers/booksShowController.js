angular
	.module('bookApp')
	.controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController (  $http, 	 $routeParams,	 $location ) {
	var vm = this;
	var bookId = $routeParams.id;
	vm.book;
	vm.bookCopy;

	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books/' + bookId,
	}).then(function successCallback(response){
		vm.book = response.data;
		vm.bookCopy = angular.copy(vm.book);

	}, function errorCallback(error) {
		console.log('Error: ', error);
	})

	vm.deleteBook = function(book){
		$http({
			method: 'DELETE',
			url: 'https://super-crud.herokuapp.com/books/' + bookId
		}).then(function deleteSuccessCallback(response){
			//redirect to homepage
			$location.path('/')
		}, function deleteErrorCallback(error){
			console.log('Error: ', error);
		})
	}


	vm.editBook = function(book) {
		$http({
			method: 'PUT',
			url: 'https://super-crud.herokuapp.com/books/' + bookId,
			data: book
		}).then(function editSuccess(response){
			vm.book = response.data;
			$location.path('/');
		}, function editError(error){
			console.log('There was an error', error);
		})
	}

}