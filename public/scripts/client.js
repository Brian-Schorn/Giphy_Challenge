var app = angular.module('giphyApp', []);

app.controller('giphyController',['giphyService', function(giphyService){
  console.log("giphyController Loaded");

  var ctrl = this;

  ctrl.randomGIF = function () {
    console.log("Random GIF Request");
    giphyService.randomGIF().then(function(gif){
      ctrl.imageName = gif.data.id;
      ctrl.imageURL = gif.data.image_url;
    });
  };
  ctrl.randomGIF();

  ctrl.searchGIF = function(searchTerm) {
    console.log("Search GIF Request", searchTerm);
    giphyService.searchGIF(searchTerm).then(function(gif){
      ctrl.imageName = gif.data[0].id;
      ctrl.imageURL = gif.data[0].images.original.url;
    })
  }

  ctrl.favGIF = function(favComment, gifURL) {
    console.log("Favorite Request, Comment:", favComment, gifURL)
    giphyService.favGIF(favComment, gifURL
    );

  }

}]);

app.controller('favoritesController', ['favService', function(favService){
  console.log("favoritesController Loaded");
  var ctrl = this;

  favService.getList().then(function(list){
    ctrl.faveList = list;
    console.log(list);
  });


}]);
