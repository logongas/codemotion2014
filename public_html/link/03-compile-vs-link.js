var app = angular.module("app", []);



app.directive("entreSemana", [function () {
        return {
            restrict: "A",
            priority: 2,
            compile: function (tElement, tAttrs) {
                tElement.append("<option value='1'>Lunes</option>");
                tElement.append("<option value='2'>Martes</option>");
                tElement.append("<option value='3'>Miercoles</option>");
                tElement.append("<option value='4'>Jueves</option>");
                tElement.append("<option value='5'>Viernes</option>");
            }
        };

    }]);

app.directive("finSemana", [function () {
        return {
            restrict: "A",
            priority: 1,
            compile: function (tElement, tAttrs) {
                tElement.append("<option value='6'>Sabado</option>");
                tElement.append("<option ng-style='{backgroundColor:\"red\"}' value='7'>Domingo</option>");
            }
        };
    }]);



app.controller("PruebaController", ['$scope', function ($scope) {

        $scope.codemotion={
            madrid:1,
            berlin:1,
            telAviv:1,
            milan:1
        }
        
    }]);


