app.service('favService',['$http', function ($http) {

  this.getList = function () {
    return $http.get('/favGif').then(function (response) {
      console.log('Got a response from the DB', response);
      return response.data; // returned on resolution of promise
    }).catch(function (err) {
      console.log('Error getting info from DB', err);
    });
  };

  // this.favGIF = function(favComment, gifURL){
  //   var favoriteGIF = { url: gifURL,
  //                       comment: favComment};
  //   console.log(favoriteGIF);
  //   $http.post('/favGif', favoriteGIF);
  // }


}]);
