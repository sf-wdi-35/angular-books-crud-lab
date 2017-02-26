angular
	.module('bokzApp')
	.controller('BooksIndexController', BooksIndexController)

BooksIndexController.$inject = ['$http'];
function BooksIndexController(   $http  ){
	var isso = this;


	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books'
	}).then(function successCb(response){
		isso.livros = response.data;
	}, function errorCb(response){
		console.log(response);
	})
}
