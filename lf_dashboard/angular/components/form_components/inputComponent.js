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

            var formattedName;

            // Set a default fieldType
            if (!ctrl.fieldType) {
                ctrl.fieldType = 'text';
            }

            if(ctrl.name.indexOf('_') === -1) {
                //if not underscore, treat as if camelCase
                formattedName = ctrl.name.replace(/([A-Z]+)/g, "$1").replace(/([A-Z][a-z])/g, " $1");
                formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
            } else {
                //remove underscore return correctly formatted name
                formattedName = ctrl.name.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(key, p1) {
                    return key.toUpperCase();
                });
            }

            if (!ctrl.placeholder) {
                ctrl.placeholder = formattedName;
            }

            if (!ctrl.label) {
                ctrl.label = formattedName;
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