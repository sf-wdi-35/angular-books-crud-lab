angular
  .module('booksApp')
  .controller('BooksIndexController', BooksIndexController);

  BooksIndexController.$inject = ['$http'];

  function BooksIndexController ($http) {
    var vm = this;
    // vm.newBook = {
    // };
    //
    // vm.books = [];

    // books.push({
    //   title: "Around the World in 80 Days",
    //   author: "Jules Verne",
    //   image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
    //   releaseDate: "January 30, 1873",
    // })


      $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/books'
      }).then(function successCallback(response) {
        console.log(response)
        vm.books = response.data.books;
      }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
      });


  }
