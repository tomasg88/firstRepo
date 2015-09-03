(function(){
    var app = angular.module('mainApp');
    
    app.config(['$routeProvider', getRoutes]);
    
    function getRoutes($routeProvider){
        $routeProvider.
      when('/', {
        templateUrl: 'app/areas/home/home.html',
        controller: 'HomeController'
      }).
      when('/login', {
        templateUrl: 'app/areas/login/login.html',
        controller: 'LoginController'
      }).
      when('/test',{
        templateUrl: 'test/test.html',
        controller: 'TestController'
      }).
      otherwise({
        redirectTo: '/'
      });
    }

})();