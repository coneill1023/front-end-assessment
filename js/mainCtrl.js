angular.module('assessment')
.controller('mainCtrl', function ($scope, mainService) {
  $scope.post = mainService.getShopData();
})
