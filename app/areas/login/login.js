(function(){
    'use strict';
    
    var controllerId = 'LoginController';
    var app = angular.module('mainApp')
    
    app.controller(controllerId,
        ['$scope','$route', '$location', LoginController]);
    
    
    function LoginController($scope, $route, $location){
        $scope.login = function (ev) {
            // Ask to the server, do your job and THEN set the user
            //Auth.setUser($scope.userTxt); //Update the state of the user in the app
            if ($scope.inputEmail != ''){
                //$scope.showAlert();
                $location.path('/home');
            }
        };
        
        $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.body))
                .title('MyApplication')
                .content('Welcome ' + $scope.userTxt)
                .ariaLabel('Alert Dialog Demo')
                .ok('GO!')
                .targetEvent(ev)
            );
        };
    }
    
})();
