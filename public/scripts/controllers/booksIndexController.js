// BooksIndexController.js //
angular
    .module('angularBooks')
    .controller('BooksIndexController', BooksIndexController)


BooksIndexController.$inject = ['$http'];
function BooksIndexController($http){
  console.log('ima b.i.c.');

  var vm = this;

  var newBook = {};


  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function onSuccess(res){
    vm.data = res.data;  
  }, function onError(res){
    console.log('failjax: ', res);
  });


} // closes BooksIndexController
