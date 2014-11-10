var app = angular.module("app", []);

app.directive("item", [function () {
    return {
        restrict: "E",
        scope:{
            dato:"@"
        },
        template: function (tElement, tAttrs) {
            if (tAttrs.tipo==="img") {
                return "<img src='{{dato}}'>"
            } else if (tAttrs.tipo==="txt") {
                return "<h1>{{dato}}</h1>"
            } else {
                return "<h1 ng-non-bindable>tipo desconocido:"+tAttrs.tipo+"</h1>";
            }
        }
    };
}]);


app.constant("bootstrapVersion",3);

app.directive("fila", ['bootstrapVersion',function (bootstrapVersion) {
return {
    restrict: "E",
    transclude:true,     
    template: function (tElement, tAttrs) {
        if (bootstrapVersion===2) {
            return '<div class="row"><div class="span12"><ng-transclude></ng-transclude></div></div>';
        } else {
            return '<div class="row"><div class="col-md-12"><ng-transclude></ng-transclude></div></div>';
        }
    }
};
}]);


app.controller("PruebaController", ['$scope', function ($scope) {   

    $scope.itemImagen={
        tipo:"img",
        dato:"https://angularjs.org/img/AngularJS-large.png"
    };

    $scope.itemTexto={
        tipo:"txt",
        dato:"Angular"
    };
    
}]);