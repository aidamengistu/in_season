ProduceApp.controller('ProduceCtrl',['$scope','$routeParams','$http','UserService',function($scope,$routeParams,$http,UserService){


  $scope.apiKey="dvxdhG8BCOtpB3XK594INq0utY4e1SYc";
  $scope.page=1;
  $scope.recipesPerPage=20;

  $scope.searchWord = $routeParams.name;

  var req = {
    url:'//api.bigoven.com/recipes',
    params: {
      title_kw:$routeParams.name,
      pg:$scope.page,
      rpp:$scope.recipesPerPage,
      api_key: $scope.apiKey
    }

  };

  $http(req).success(function(data){
    console.log('here is your recipe', data);
    // loop through and parseInt StarRating and set results to results.StarRating = parseInt(results.StarRating);
    $scope.results = data.Results;

  });

  $scope.addRecipe = function(recipe){

    if(!UserService.currentUser){
      alert('You must be logged in!')
      return;
    }


    var req = {
     method: 'POST',
     url: '/api/recipe',
     data: {url: recipe.WebURL, recipeID: recipe.RecipeID, title: recipe.Title, thumbnail: recipe.ImageURL120, starRating: recipe.StarRating}
   }



   $http(req).success(function(data){
      // $location.path(data.WebURL);
      alert("Saved!");
      console.log('heller', data);
    }).error(function(err){
      alert('There was an error');
      console.log(err);
    })

  }

}])


