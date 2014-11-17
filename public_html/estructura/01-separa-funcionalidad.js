var app = angular.module("app", ['ui.date']);





app.controller("PruebaController", ['$scope', function ($scope) {
        $scope.fecha=null;
        
        $scope.typeof=function(valor) {
            return Object.prototype.toString.call(valor);
        }
        
    }]);
