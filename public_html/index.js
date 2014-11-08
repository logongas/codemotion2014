var app = angular.module("app", []);

app.directive("dir1", ['$compile',function ($compile) {
        var directiveDefinitionObject = {
            restrict: "A",
            priority: 1100000,
            terminal:true,
            compile: function (tElement, tAttrs) {
                console.log("compile dir1=\n" + tElement.parent().html());
                tElement.attr("name", "personaje");
                tElement.attr("ng-required", "true");
                tElement.removeAttr("dir1");
                return {
                    pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        console.log("pre dir1=\n" + iElement.parent().html());
                        
                    },
                    post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        console.log("post dir1=\n" + iElement.parent().html());
                        $compile(iElement)(scope);
                    }
                };
            }
        };

        return directiveDefinitionObject;

    }]);

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
                tElement.append("<option value='6'>Sabado</option>");
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
            restrict: "A",
            template:"<option value='6'>Sabado</option><option value='7'>Domingo</option>"
        };

        return directiveDefinitionObject;

    }]);

app.directive("caColor", [function () {
        var directiveDefinitionObject = {
            restrict: "A",
            compile: function (tElement, tAttrs) {
                console.log("compile ca-Color=\n" + tElement.parent().html());
                return {
                    pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        console.log("pre ca-Color=\n" + iElement.parent().html());
                    },
                    post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        console.log("post ca-Color=\n" + iElement.parent().html());
                        iElement.css("background-color", iAttrs.caColor);
                    }
                };
            }
        };

        return directiveDefinitionObject;

    }]);

app.directive("myInput", [function () {
        var directiveDefinitionObject = {
            restrict: "E",
            replace: true,
            template: "<input type=\"text\" ></input>",
            compile: function (tElement, tAttrs) {
                console.log("compile myInput=\n" + tElement.parent().html());
                tElement["ca-color"] = "red";
                tElement.caColor = "red";

                tElement.attr("ca-color", "red");
                tElement.attr("caColor", "red");
                tAttrs.$set("caColor", "red");
                tAttrs.$set("ca-color", "red");
                tAttrs.caColor = "red";
                tAttrs["ca-color"] = "red";

                return {
                    pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        console.log("pre myInput=\n" + iElement.parent().html());
                    },
                    post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        console.log("post myInput=\n" + iElement.parent().html());

                    }
                };
            }
        };

        return directiveDefinitionObject;

    }]);


app.directive("caOptions", [function () {
        var directiveDefinitionObject = {
            restrict: "A",
            priority: 1000000,
            compile: function (tElement, tAttrs) {
                tAttrs.$set("caColor", "red");
                //tAttrs.ngOptions="";
                tElement.html('<option  value="">--Elije una opcion--</option>');
                console.log("compile ca-Options=" + tElement.parent().html());
                a = tAttrs;

                return {
                    pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        var isArrayObjects = scope.$eval(" metadata['" + iAttrs.ngModel + "'].isArrayObjects");
                        if (isArrayObjects === true) {
                            iAttrs.ngOptions = "value as value.name for value in metadata['" + tAttrs.ngModel + "'].values";
                        } else {
                            iAttrs.ngOptions = "value for value in metadata['" + tAttrs.ngModel + "'].values";
                        }
                        console.log("pre ca-Options=" + iElement.parent().html());


                    },
                    post: function (scope, iElement, iAttrs, controller, transcludeFn) {

                        var ngModel = iAttrs.ngModel;
                        console.log("post ca-Options=" + iElement.parent().html());
                        if (iAttrs.caOptions) {
                            scope.$watch(ngModel, function (newValue, oldValue) {
                                if (newValue) {
                                    if (newValue[iAttrs.caOptions] === true) {
                                        iElement.css("color", "red");
                                    } else {
                                        iElement.css("color", "");
                                    }
                                } else {
                                    iElement.css("color", "");
                                }
                            })
                        }

                    }
                };
            }
        };

        return directiveDefinitionObject;

    }]);


var a;

app.controller("GalacticaController", ['$scope', function ($scope) {

        $scope.metadata = {};

        $scope.metadata.nave = {
            isArrayObjects: true,
            values: [
                {name: "Galactica", enemy: false},
                {name: "Estrella base Cylon", enemy: true},
                {name: "Pegasus", enemy: false}
            ]
        };

        $scope.metadata.personaje = {
            isArrayObjects: false,
            values: [
                "Adama",
                "Laura",
                "Caprica 6"
            ]
        };

        $scope.nave = $scope.metadata.nave.values[1];
        $scope.personaje = null;




        
        $scope.codemotion={
            madrid:null,
            berlin:null,
            telAviv:null,
            milan:null
        }
        
        
        
        
        
    }]);
