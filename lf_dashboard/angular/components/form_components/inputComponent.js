(function(angular) {
    'use strict';
    function inputComponentController($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.noLabel = false;
        ctrl.required = false;

        // ctrl.handleModeChange = function() {
        
        //         ctrl.onUpdate({value: ctrl.fieldValue});
        //         ctrl.fieldValueCopy = ctrl.fieldValue;

        // };

        ctrl.$onInit = function() {
            
            // Set a default fieldType
            if (!ctrl.fieldType) {
                ctrl.fieldType = 'text';
            }

            if (!ctrl.placeholder) {
                ctrl.placeholder = ctrl.name;
            }

            if (!ctrl.label) {
                ctrl.label = ctrl.name;
            }
        };
    }

    angular.module('myApp').component('inputComponent', {
        templateUrl: 'angular/components/form_components/input_component.html',
        controller: inputComponentController,
        bindings: {
            label: "@",
            fieldType: "@",
            placeholder: "@",
            noLabel: "@",
            name: "@",
            required: "@"
        }
    });
})(window.angular);