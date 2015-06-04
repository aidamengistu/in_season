ProduceApp.controller('BigOvenApiCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

console.log("BigOvenApiCtrl loaded!");

$scope.search = function(searchWord){

  if (searchWord) {
    $scope.searchWord = searchWord;
  }

  $scope.apiKey="dvxdhG8BCOtpB3XK594INq0utY4e1SYc";
  $scope.page=1;
  $scope.recipesPerPage=20;

  var req = {
    url:'//api.bigoven.com/recipes',
    params: {
      title_kw:$scope.searchWord,
      pg:$scope.page,
      rpp:$scope.recipesPerPage,
      api_key: $scope.apiKey
    }

  };

  $http(req).success(function(data){
    console.log('here is your recipe', data);
    $scope.results = data.Results;
  });

}

  var req = {
    url:'/api/produce',
    params: {
      name:$scope.name,
      season:$scope.season
    }
  };
  $http(req).success(function(allProduce){
    $scope.produce = allProduce;
  })




}]);
