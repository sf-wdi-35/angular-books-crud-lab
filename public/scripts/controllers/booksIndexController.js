// BIC.js //
angular
    .module('angularBooks')
    .controller('BooksIndexController', BooksIndexController)


BooksIndexController.$inject = ['$http'];
function BooksIndexController($http){
  console.log('ima b.i.c.');

  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function onSuccess(res){
    vm.data = res.data;
    console.log('good job, ajax: ', vm.books);
  }, function onError(res){
    console.log('failjax: ', res);
  });


} // closes BooksIndexController
