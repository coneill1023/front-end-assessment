angular.module('assessment')
.service('mainService', function($http) {


  this.getShopData = function(items) {
    var uri = 'https://dev-assessment.firebaseio.com/products.json'
      return $http({
        method: 'GET',
        url: uri
      }).then(function (response) {
        return response.data;
      })

  };

  this.getOneItem = function(id) {
    var uri = 'https://dev-assessment.firebaseio.com/products/ + id + .json'
    return $http({
      method: 'GET',
      url: uri
    }).then(function (response) {
      return response.data
    })
  }

});
