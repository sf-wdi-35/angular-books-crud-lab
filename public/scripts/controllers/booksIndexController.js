
angular.module("bookApp")
  .controller("BooksIndexController", BooksIndexController)

BooksIndexController.$inject = ["$http"];
function BooksIndexController(   $http) {
  var vm = this;

  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books"
  }).then(onIndexSuccess, onError)

  function onIndexSuccess(responseInfo) {
    console.log("All books get data", responseInfo.data);
    vm.books = responseInfo.data.books;
  }
  function onError(errorInfo) {
    console.log("Get all book error", errorInfo);
  }
};
