ProduceApp.controller('NavCtrl',['$scope','$rootScope','$modal','UserService',function($scope,$rootScope,$modal,UserService){
  // console.log('nav controller loaded.');
  $scope.UserService = UserService;


  $scope.showLogin = function() {
    $modal.open({
      templateUrl:'/views/auth/loginModal.html',
      controller:'AuthLoginModalCtrl'
    });
  };

  $scope.logout = function() {
    UserService.logout(function(err, data){
      //doing nothing...
    });
  }

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

}]);