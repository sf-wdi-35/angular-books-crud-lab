angular
  .module('booksApp')
  .controller('BooksIndexController', BooksIndexController);

  BooksIndexController.$inject = ['$http'];

  function BooksIndexController ($http) {
    var vm = this;

      $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/books'
      }).then(function onBooksIndexSuccess(response) {
        console.log(response)
        vm.books = response.data.books;
      }, function onError(response) {
        console.log('There was an error getting the data', response);
      });

      vm.createBook = function () {
        $http({
          method: 'POST',
          url: 'https://super-crud.herokuapp.com/books',
          data: vm.newBook,
        }).then(function successCallback(response) {
          vm.books.push(response.data);
        }, function errorCallback(response) {
          console.log('There was an error posting the data', response);
        });
      }

  }
