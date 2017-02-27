// 'use strict';
//
// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
var app = angular.module('myApp', [
  'ngRoute'
  // 'myApp.view1',
  // 'myApp.view2',
  // 'myApp.version'
]).config(['$locationProvider', '$routeProvider',function($locationProvider, $routeProvider){
    // $locationProvider.html5Mode(true);
    ($routeProvider)
        .when('/',{
            templateUrl:'templates/login.html',
            controller:'login'
        })
        .when('/category',{
        templateUrl:'templates/category.html',
            // template:'hai u r in category'
            controller:'myButtons as buttons'
    })
        .when('/category/addnews',{
            templateUrl:'templates/newsArticle.html',
            controller:'addNewsController'
        })
        .when('/category/displayNewsArticle',{
//                    template:"hai",
                    templateUrl:'templates/displayNewsArticle.html',
                    controller:'newsArticleDisplay'
                })
        .when('/category/:type',{
        templateUrl:'templates/newsDisplay.html',
            controller:'newsDisplay'
    })
    $routeProvider.otherwise({redirectTo: '/'});


        // .otherwise({redirectTo:'/'});
    
}]);
