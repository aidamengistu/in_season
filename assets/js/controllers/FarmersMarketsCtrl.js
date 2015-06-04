ProduceApp.controller('FarmersMarketsCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){

  console.log("Farmers Markets Controller loaded!");

  $scope.marketDetails = {};

  $scope.search = function(){

    var req = {
      url:'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch',
      params: {
        zip:$scope.zip
      }
    };

    $http(req).success(function(data){
      $scope.markets = data.results;
    });

  }


  $scope.details = function(marketId){

    if(!$scope.marketDetails[marketId]){
      var req = {
        url:'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail',
        params: {
          id:marketId
        }
      };

      $http(req).success(function(data){
        $scope.marketDetails[marketId] = data.marketdetails;
      });

    }

  }

}]);