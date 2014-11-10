var app = angular.module("app", []);

app.directive("titulo", [function () {
    return {
        template: "<h1>Esto es el titulo</h1>"
    };
}]);

app.directive("subtitulo", [function () {
    return {
        template:  "<h2>Esto es el subtitulo</h2>"
    };
}]);

app.controller("PruebaController", ['$scope', function ($scope) {   


    
}]);