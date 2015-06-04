ProduceApp.controller('SavedRecipesCtrl',['$scope','$location','$http','UserService',function($scope,$location,$http,UserService){

  var req = {
   method: 'GET',
   url: '/api/recipe',
   data: {
    url: $scope.url,
    recipeID: $scope.recipeID,
    title: $scope.title,
    thumbnail: $scope.thumbnail,
    starRating: $scope.starRating
  }

}

$http(req).success(function(data){
  $scope.savedRecipes = data;
  console.log('SavedREcipes', data);
}).error(function(err){
  alert('There was an error');
  console.log(err);
})


$scope.deleteRecipe = function(idx){

  var recipeID = $scope.savedRecipes[idx].id;

  $http.delete('/api/recipe/'+ recipeID).success(function(data){
    $scope.savedRecipes.splice(idx,1);
    alert('deleted!');
  });
}

}]);