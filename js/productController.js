angular.module('assessment')
.controller('productController', function ($scope, mainService, $location) {
  $scope.getData = function () {
    mainService.getOneItem()
  .then(function (response) {
    console.log(response);
  })
  };
  $scope.getData();
})
