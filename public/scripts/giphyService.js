app.service('giphyService',['$http', function ($http) {
  var API = "https://api.giphy.com/v1/";
  var params = {params: {api_key: 'dc6zaTOxFJmzC'}};


  this.randomGIF = function () {
    // return the promise to the caller
    return $http.get(API + "gifs/random", params).then(function (response) {
      console.log('Got a response from the API', response);
      return response.data; // returned on resolution of promise
    }).catch(function (err) {
      console.log('Error getting info from API', err);
    });
  };


  this.searchGIF = function(searchTerm){
    params.params.q = searchTerm.split(' ').join('+');
    console.log(params.params.q);

    return $http.get(API + "gifs/search", params).then(function(response){
      return response.data
    }).catch(function (err) {
      console.log('Error getting info from API after searching', err);
    });
  }

  this.favGIF = function(favComment, gifURL){
    var favoriteGIF = { url: gifURL,
                        comment: favComment};
    console.log(favoriteGIF);
    $http.post('/favGif', favoriteGIF);

  }
  //API KEYs , { params: { api_key: 'key goes here'}}
  // ctrl.randomGIF = function(){
  //   $http.get(API + "gifs/random", params).then(function(response){
  //     console.log(response);
  //     ctrl.imageName = response.data.data.id;
  //     ctrl.imageURL = response.data.data.image_url;
  //     console.log('img URL: ', ctrl.imageURL);
  //   });
  // };




  // this.getPokemon = function (pokemon) {
  //   return $http.get(pokemon.url).then(function(response){
  //     console.log('Pokemon info', response.data);
  //     var foundPokemon =  response.data;
  //     return foundPokemon.sprites.front_default; // image
  //   }).catch(function(err){
  //     console.log('Error getting info from API', err);
  //   })
  // };

}]);
