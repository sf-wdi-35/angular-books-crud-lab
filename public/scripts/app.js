console.log('app.js sanity check');

angular
      .module("angularBooks", [])
      .config(config);

function config(){
  console.log('angular works!');
}
