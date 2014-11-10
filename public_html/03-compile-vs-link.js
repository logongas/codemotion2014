var app = angular.module("app", []);



app.directive("entreSemana", ['$compile',function ($compile) {
        var directiveDefinitionObject = {
            restrict: "A",
            priority:2,
            compile: function (tElement, tAttrs) {
                tElement.append("<option value='1'>Lunes</option>");
                tElement.append("<option value='2'>Martes</option>");
                tElement.append("<option value='3'>Miercoles</option>");
                tElement.append("<option value='4'>Jueves</option>");
                tElement.append("<option value='5'>Viernes</option>");

                return {
                    pre: function (scope, iElement, iAttrs, controller, transcludeFn) { 
                    },
                    post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    }
                };
            }
        };

        return directiveDefinitionObject;

    }]);

app.directive("entreSemanaMal", ['$compile',function ($compile) {
        var directiveDefinitionObject = {
            restrict: "A",
            template:"<option value='1'>Lunes</option><option value='2'>Martes</option><option value='3'>Miercoles</option><option value='4'>Jueves</option><option value='5'>Viernes</option>"
        };

        return directiveDefinitionObject;

    }]);


app.directive("finSemana", ['$compile',function ($compile) {
        var directiveDefinitionObject = {
            restrict: "A",
            priority:1,
            compile: function (tElement, tAttrs) {
                tElement.append("<option ca-color='red' value='6'>Sabado</option>");
                tElement.append("<option value='7'>Domingo</option>");

                return {
                    pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    },
                    post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    }
                };
            }
        };

        return directiveDefinitionObject;

    }]);

app.directive("finSemanaMal", ['$compile',function ($compile) {
        var directiveDefinitionObject = {
            restrict: "EA",
            template:"<option value='6'>Sabado</option><option value='7'>Domingo</option>"
        };

        return directiveDefinitionObject;

    }]);


app.controller("PruebaController", ['$scope', function ($scope) {

        $scope.codemotion={
            madrid:0,
            berlin:0,
            telAviv:0,
            milan:0
        }
        
    }]);


