(function(angular) {
    'use strict';
    function formComponentController($scope, $element, $attrs) {
        var fcCtrl = this;
        console.log("form Component Controller");
        
    }

    angular.module('myApp').component('formComponent', {
        templateUrl: 'angular/components/form_components/form_component.html',
        // transclude: true,
    transclude: {
        'header': '?formHeader',
        'body': 'formBody',
        'footer': '?formFooter'
    },
        controller: formComponentController,
        controllerAs: "fc"
    });
})(window.angular);