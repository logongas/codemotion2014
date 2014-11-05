var app = angular.module("app", []);


app.directive("caOptions", [function () {
    var directiveDefinitionObject = {
        restrict: "A",
        compile: function (tElement, tAttrs) {

            //tAttrs.ngOptions="";
            tElement.html('<option value="">--Elije una opcion--</option>');
            tAttrs.$set("ngRequired","true");
            tAttrs.$set("name",tAttrs.ngModel);
            
            return {
                pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    var isArrayObjects=scope.$eval(" metadata['" + iAttrs.ngModel + "'].isArrayObjects");
                    
                    if (isArrayObjects===true) {
                        tAttrs.ngOptions="value as value.name for value in metadata['" + tAttrs.ngModel + "'].values";
                    } else {
                        tAttrs.$set("ngOptions","value for value in metadata['" + tAttrs.ngModel + "'].values");
                    }
                },
                post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    var ngModel=iAttrs.ngModel;
                    
                    if (iAttrs.caOptions) {
                        scope.$watch(ngModel,function(newValue,oldValue) {
                            if (newValue) {
                                if (newValue[iAttrs.caOptions]===true) {
                                   iElement.css("color","red"); 
                                } else {
                                   iElement.css("color",""); 
                                }
                            } else {
                               iElement.css("color","");  
                            }
                        })
                    }
                    
                }
            };
        }
    };

    return directiveDefinitionObject;

}]);


app.controller("GalacticaController",['$scope',function($scope) {
  
    $scope.metadata={};
    
    $scope.metadata.nave={
        isArrayObjects:true,
        values:[
            {name:"Galactica", enemy:false},
            {name:"Estrella base Cylon", enemy:true},
            {name:"Pegasus", enemy:false}
        ]
    };
      
    $scope.metadata.personaje={
        isArrayObjects:false,
        values:[
            "Adama",
            "Laura",
            "Caprica 6"
        ]
    };    
    
    $scope.nave=$scope.metadata.nave.values[1]; 
    $scope.personaje=null; 
    
}]);

