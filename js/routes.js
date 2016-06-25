angular.module('assessment')
.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/home.html",
        controller: "mainCtrl"
      })
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html"
      })
      .state('blog', {
        url: "/blog",
        templateUrl: "views/blog.html"
      })
      .state('shop', {
        url: "/shop",
        templateUrl: "views/shop.html"
      })
      .state('details', {
        url: "/product-details/:id",
        templateUrl: "views/product-details.html",
        controller: "productController"
      })
      $urlRouterProvider.otherwise("/");

});
