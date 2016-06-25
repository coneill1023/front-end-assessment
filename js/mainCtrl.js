angular.module('assessment')
.controller('mainCtrl', function ($scope, mainService, $location) {
  $scope.getData = function () {
    mainService.getShopData()
  .then(function (response) {
    console.log(response);
    $scope.products = response;
  })
  };
  $scope.getData();

  // $scope.getItem = function(id) {
  //   $location.path('/product-detail/' + id);
  //   console.log('/product-detail/' + id);
  // }

})
