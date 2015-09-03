(function(){
    'use strict';
    
    var controllerId = 'HomeController';
    var app = angular.module('mainApp');
    
    app.controller(controllerId,
        ['$scope','$route', '$location', HomeController]);
    
    function HomeController($scope, $route){

    }
    
})();