var app = angular.module("app", []);

app.directive("caOptions", [function () {
    return {
        restrict: "A",
        compile: function (tElement, tAttrs) {
            return {
                pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    var model=iAttrs.ngModel;
                    var isArrayObjects = scope.$eval(" metadata['" + model + "'].isArrayObjects");

                    if (isArrayObjects === true) {
                        iAttrs.ngOptions = "value as value.toString for value in metadata['" + model + "'].values";
                    } else {
                        iAttrs.ngOptions = "value for value in metadata['" + model + "'].values";
                    }
                },
                post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                }
            };
        }
    };
}]);


app.controller("PruebaController", ['$scope', function ($scope) {

    $scope.metadata={};

    $scope.metadata.ciudad = {
        isArrayObjects: true,
        values: [
            {toString: "Madrid", pais: "España"},
            {toString: "Berlin", pais: "Alemania"},
            {toString: "Tel Aviv", pais: "Israel"},
            {toString: "Milan", pais: "Italia"},                
        ]
    };

    $scope.metadata.diaSemana = {
        isArrayObjects: false,
        values: [
            "Lunes","Martes","Miercoles","Jueves","Sabado","Domingo"
        ]
    };

    $scope.ciudad;
    $scope.diaSemana;
        
}]);