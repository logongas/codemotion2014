var app = angular.module("app", []);

app.directive("titulo", [function () {
    return {
        restrict: "E",
        transclude:true,
        template:  "<div><h1>Esto es la plantilla</h1><ng-transclude></ng-transclude></div>"
    };
}]);

app.directive("subtitulo", [function () {
    return {
        restrict: "E",
        template:  "<h2>Esto es el subtitulo</h2>"
    };
}]);

app.controller("PruebaController", ['$scope', function ($scope) {   


    
}]);