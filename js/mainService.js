angular.module('assessment')
.service('mainService', function($http) {


  this.getShopData = function(items) {
    var uri = 'https://dev-assessment.firebaseio.com/products.json'
    return $http.jsonp(uri)
  };

});
