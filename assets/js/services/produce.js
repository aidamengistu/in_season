ProduceApp.factory('Produce',['$resource',function($resource){
  return $resource('/api/produce/:id', null, {
    'get': {method:'GET'}
  });
}])