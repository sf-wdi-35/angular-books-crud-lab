// BooksShowController.js //
angular
    .module('angularBooks')
    .controller('BooksShowController', BooksShowController);


BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location){
  console.log('ima b.s.c.');

  var vm = this;
  var bookId = $routeParams.id;


  // GRAB & SHOW ONE BOOK //
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(function onSuccess(res){
    vm.book = res.data;
    console.log('showjax: ', vm.book);
  }, function onError(res){
    console.log('failjax: ', res.data);
  });

  // UPDATE A BOOK //
  vm.updateBook = function(bookToUpdate) {
    console.log('updating: ', bookToUpdate);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookToUpdate._id,
      data: {
        title: bookToUpdate.title,
        author: bookToUpdate.author,
        image: bookToUpdate.image,
        releaseDate: bookToUpdate.releaseDate
      }
    }).then(function onSuccess(res){
      console.log('updatejax: ', res);
      vm.book = res.data;
      $location.path('/');
    }, function onError(res){
      console.log('failjax update: ', res.data);
    })
  };

  // DELETE A BOOK //
  vm.deleteBook = function(book){
    console.log('deleting: ', book);
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function onSuccess(res){
      console.log('book deleted:', res.data);
      $location.path('/');
    }, function onError(res){
      console.log('failjax delete', res.data);
    })
  };

} // closes BooksShowController
