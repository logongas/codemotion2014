var app = angular.module("app", ['ui.date']);


app.directive("spanishFormat", [function () {
    var directiveDefinitionObject = {
        compile: function (tElement, tAttrs) {
            return {
                pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    iAttrs.uiDate="{dateFormat:'dd/mm/yy'}";
                },
                post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                }
            };
        }
    };

    return directiveDefinitionObject;
}]);


app.controller("PruebaController", ['$scope', function ($scope) {
        $scope.fecha=null;
        
        
    }]);
