angular
  .module('bookApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http){
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function onSuccess(res){
    console.log(res.data);
    vm.books = res.data.books;
  }, function onError(err){
    console.log("index" + err)
  })
}