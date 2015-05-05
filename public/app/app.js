var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider){
    
   $routeProvider 
   .when('/', {
       templateUrl: 'app/views/tracker.html',
       controller: 'mainController'
   })
});