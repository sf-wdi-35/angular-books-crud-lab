angular
  .module('bookly')
  .controller('BooksIndexController', BooksIndexController);

var db = "https://super-crud.herokuapp.com/books"

BooksIndexController.$inject = ['$http'];
function BooksIndexController (  $http  ) {
  var vm = this;
  vm.newBook = {};
  vm.books = [];
  vm.editedBook = {};

  $http({
    method: 'GET',
    url: db
  }).then(function successCallback(response) {
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  // vm.createBook = function () {
  //   $http({
  //     method: 'POST',
  //     url: db,
  //     data: vm.books,
  //   }).then(function successCallback(response) {
  //     vm.albums.push(response.data);
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting the data', response);
  //   });
  // }
  //
  // vm.editBook = function (book) {
  //   $http({
  //     method: 'PUT',
  //     url: db + book._id,
  //     data: book
  //   }).then(function successCallback(json) {
  //     // don't need to do anything!
  //   }, function errorCallback(response) {
  //     console.log('There was an error editing the data', response);
  //   });
  // }
  //
  // vm.deleteBook = function (book) {
  //   $http({
  //     method: 'DELETE',
  //     url: db + book._id
  //   }).then(function successCallback(json) {
  //     var index = vm.albums.indexOf(book);
  //     vm.books.splice(index,1)
  //   }, function errorCallback(response) {
  //     console.log('There was an error deleting the data', response);
  //   });
  // }
}
