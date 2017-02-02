var app = angular.module('giphyApp', []);

app.controller('giphyController',['giphyService', function(giphyService){
  console.log("giphyController Loaded");

  var ctrl = this;

  // ctrl.searchTerm = '';


  ctrl.randomGIF = function () {
    console.log("Random GIF Request");
    giphyService.randomGIF().then(function(gif){
      ctrl.imageName = gif.data.id;
      ctrl.imageURL = gif.data.image_url;
    });
  };
  //API KEYs , { params: { api_key: 'key goes here'}}
  // ctrl.randomGIF = function(){
  //   $http.get(API + "gifs/random", params).then(function(response){
  //     console.log(response);
  //     ctrl.imageName = response.data.data.id;
  //     ctrl.imageURL = response.data.data.image_url;
  //     console.log('img URL: ', ctrl.imageURL);
  //   });
  // };

  // giphyService.searchGIF.then(function (gif){
  //
  // })

ctrl.searchGIF = function(searchTerm) {
  console.log("Search GIF Request", searchTerm);
  giphyService.searchGIF(searchTerm).then(function(gif){
      ctrl.imageName = gif.data[0].id;
      ctrl.imageURL = gif.data[0].images.original.url;
  })
}
  // ctrl.searchGIF = function(){
  //   params.params.q = ctrl.searchTerm.split(' ').join('+');
  //   console.log(params.params.q);
  //   $http.get(API + "gifs/search", params).then(function(response){
  //     console.log(response);
  //     ctrl.imageName = response.data.data[0].id;
  //     ctrl.imageURL = response.data.data[0].images.original.url;
  //     console.log('img URL: ', ctrl.imageURL);
  //   });
  // }

}]);
