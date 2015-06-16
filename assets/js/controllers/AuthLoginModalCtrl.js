ProduceApp.controller('AuthLoginModalCtrl',['$scope','UserService','$modalInstance','$http',function($scope,UserService,$modalInstance,$http){
  console.log('login modal controller!');

  $scope.login = function(){

    UserService.login($scope.email, $scope.password, function(err, data){
      if(err){
        console.log(err);
        alert('something horrible happened.');
      } else if(data && data.result){
        $modalInstance.close();
      } else {
        console.log(data);
        alert('unable to log in');
      }
    });
  };

  $scope.signup = function(){

    if($scope.signupPassword != $scope.signupPasswordConfirm){
      AlertService.add('danger','Password is not a match.')
      return;
    }

    var signupData={
      email:$scope.email,
      password:$scope.password,
      firstName:$scope.firstName
      // lastName:$scope.lastName
    };

    console.log(signupData);

    $http.post('/api/User',signupData)
    .success(function(data){
      $scope.login()
    })
    .error(function(err){
      console.log(err);
      alert(err);
    })
  }
}]);