ProduceApp.controller('FarmersMarketsCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){

  console.log("Farmers Markets Controller loaded!");



  $scope.marketDetails = {};

  $scope.search = function(){
    alert('search loading');
    console.log('search loading');
    // var req = {
    //   url:'//search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch',
    //   params: {
    //     zip:$scope.zip
    //   }
    // };

    // $http(req).success(function(data){
    //   $scope.markets = data.results;
    // });
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

    // if(!$scope.marketDetails[marketId]){
    //   var req = {
    //     url:'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail',
    //     params: {
    //       id:marketId
    //     }
    //   };

    //   $http(req).success(function(data){
    //     $scope.marketDetails[marketId] = data.marketdetails;
    //   });

    // }

  }

}]);