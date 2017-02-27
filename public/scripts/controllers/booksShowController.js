angular
    .module('booksApp')
    .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];

function BooksShowController($http, $routeParams, $location) {
    var vm = this;
    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function onSuccess(res) {
        vm.book = res.data;
    }, function onError(res) {
        console.log(res);
    });

    vm.deleteBook = function(book) {
        $http({
            method: 'DELETE',
            url: 'https://super-crud.herokuapp.com/books/' + book._id
        }).then(function onSuccess(res) {
            $location.path('/');
        }, function onError(res) {
            console.log(res);
        });
    }

    vm.editBook = function(book) {
        $http({
            method: 'PUT',
            url: 'https://super-crud.herokuapp.com/books/' + book._id,
            data: book
        }).then(function onSuccess(res) {
            $location.path('/');
        }, function onError(res) {
            console.log(res);
        });
    }

    vm.cancelEdit = function(book) {
      $location.path('/books/' + book._id);
      console.log(book);
    }
}
