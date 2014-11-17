var app = angular.module("app", []);



app.directive("defaultCloseAlertButton", [function () {
        return {
            restrict: "E",
            template: '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span></button>'
        };
    }]);

app.directive("closeAlertButtonn", [function () {
        return {
            restrict: "E",
            template: '<button type="button"  data-dismiss="alert" style="float:right">Cerrar</button>'
        };
    }]);

app.directive("alert", ['$injector', function ($injector) {
        return {
            template: function () {
                var button;
                if ($injector.has('closeAlertButtonDirective') === true) {
                    button = "<close-alert-button></close-alert-button>"
                } else {
                    button = "<default-close-alert-button></default-close-alert-button>"
                }

                return '<div class="alert alert-warning alert-dismissible" role="alert">' + button + ' <strong>{{tipo}}</strong> {{mensaje}}</div>'
            },
            scope: {
                tipo: "@",
                mensaje: "@"
            }

        }
    }])

app.controller("PruebaController", ['$scope', function ($scope) {
        $scope.codemotion = {
            madrid: "1"
        }
    }]);
