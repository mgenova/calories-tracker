(function(){
    
    var myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(function($routeProvider){

       $routeProvider 
       .when('/', {
           templateUrl: 'app/views/tracker.html',
           controller: 'mainController'
        })
        .otherwise({redirectTo:'/'});
   });
}());