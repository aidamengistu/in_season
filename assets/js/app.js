var ProduceApp = angular.module('ProduceApp',['ngRoute','ngResource','ui.bootstrap']);

ProduceApp.run(['$rootScope','AlertService','UserService',function($rootScope, AlertService, UserService) {

  UserService.check(function(err, data){
    console.log('check', err, data);
  });

  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    // console.log('change',event,next,current);
    AlertService.clear();
  });

}]);

ProduceApp.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){


  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl:'/views/home.html',
    controller:'BigOvenApiCtrl'
  })
  .when('/markets',{
    templateUrl:'/views/markets.html',
    controller:'FarmersMarketsCtrl'
  })
  .when('/recipes/:name',{
    templateUrl:'/views/recipes.html',
    controller:'ProduceCtrl'
  })
  .when('/savedRecipes',{
    templateUrl:'/views/savedRecipes.html',
    controller:'SavedRecipesCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })

}])
