angular
	.module('bokzApp')
	.controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController (  $http,   $routeParams ,  $location) {

  var isso = this;
  var id = $routeParams.id;

  $http({
    method: 'GET',
    url: `https://super-crud.herokuapp.com/books/${id}`
  }).then(function successCallback(response) {
    isso.livros = response.data;
  }, function errorCallback(response){
    console.log(response);
  });

  isso.updateBook = function(livroToUpdate) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + livroToUpdate._id,
      data: {
        title : livroToUpdate.title,
        author : livroToUpdate.author,
        image : livroToUpdate.image,
        releaseDate : livroToUpdate.releaseDate
      }
    }).then(function successCallback(reponse){
      isso.livros = response.data;
      $location.path('/');
    }, function errorCallback(reponse){
      console.log(response);
    });
  };

  isso.deleteLivro = function(livro) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + livro._id,
    }).then(function successCallback(response){
      $location.path('/');
    }, function errorCallback(reponse){
      console.log(response);
    });
    
  };


}