console.log("JS works")

angular.module("bookApp", ["ngRoute"])
  .controller("BooksIndexController", BooksIndexController);

function BooksIndexController() {
  var vm = this;
  vm.books = [
    {
      title: "Around the World in 80 Days",
      author: "Jules Verne",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
      releaseDate: "January 30, 1873"
    },
    {
      title: "The Four Hour Workweek",
      author: "Tim Ferriss",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892117/865b465a-8156-11e5-834b-9c4172d4b0fe.jpg",
      releaseDate: "April 1, 2007"
    },
    {
      title: "Hankleberry Finn",
      author: "Hank Hill",
      image: "https://media.giphy.com/media/xDRq2yipbOWDC/giphy.gif",
      releaseDate: "April 10, 1984"
    }
  ];
}



  //THIS IS THE CONFIG for later

  // .config(config)
  //
  // config.$inject = ["$routeProvider", "$locationProvider"];
  // function config(   $routeProvider,   $locationProvider  ) {
  //   $routeProvider
  //     .when("/", {
  //       templateUrl: "",
  //       controllerAs: "",
  //       controller: "",
  //     })
  //   .otherwise({
  //     redirectTo: "/"
  //   });
  //
  //   $locationProvider
  //     .html5Mode({
  //       enambled: true,
  //       requireBase: false
  //     });
  // }
