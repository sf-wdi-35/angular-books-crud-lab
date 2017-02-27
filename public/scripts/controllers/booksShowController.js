angular
	.module('bookApp')
	.controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController (  $http, 	 $routeParams,	 $location ) {
	var vm = this;
	var bookId = $routeParams.id;

	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books/' + bookId,
	}).then(function successCallback(response){
		vm.book = response.data;
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
			// console.log(response);
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
		}, function editError(response){
			console.log('There was an error', error);
		})
	}

}