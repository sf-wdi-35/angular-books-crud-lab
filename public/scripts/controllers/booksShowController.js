

angular.module("bookApp")
  .controller("BooksShowController", BooksShowController);

BooksShowController.$inject = ["$http", "$routeProvider", "$locationProvider"];
  function BooksShowController( $http,   $routeProvider,   $locationProvider){
    var vm = this;
    var bookId = params.id;
    $http({
      method: "GET",
      url: "https://super-crud.herokuapp.com/books" + bookId
    }).then(onShowSuccess, onShowError);

    function onShowSuccess(showResponse) {
      console.log("Show data for book" + bookId, "Data:", showResponse.data);
      vm.book = showResponse.data;
    }
    function onShowError(showError) {
      console.log("Show Error", showError);
    }
  }
