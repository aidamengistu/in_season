ProduceApp.controller('FarmersMarketsCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){

  console.log("Farmers Markets Controller loaded!");

  $scope.marketDetails = {};

  $scope.search = function(){
    var zipData = {zip:$scope.zip}
    $http.post('/api/farmersMarketData', zipData)
    .success(function(data){
      $scope.markets = data.results;
    })
    .error(function(err){
      console.log('error:', err);
    });

  }

  $scope.details = function(marketId){

    var marketData = {marketId:marketId}
    $http.post('/api/farmersMarketFinalData', marketData)
    .success(function(marketData){
      $scope.marketDetails[marketId] = marketData.marketdetails;
    })
    .error(function(err){
      console.log('error:', err);
    })

  }

}]);