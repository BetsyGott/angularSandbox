(function(angular) {
    'use strict';
    function inputComponentController($scope, $element, $attrs) {
        var ctrl = this;
        // ctrl.editMode = false;
        //
        // ctrl.handleModeChange = function() {
        //     if (ctrl.editMode) {
        //         ctrl.onUpdate({value: ctrl.fieldValue});
        //         ctrl.fieldValueCopy = ctrl.fieldValue;
        //     }
        //     ctrl.editMode = !ctrl.editMode;
        // };
        //
        // ctrl.reset = function() {
        //     ctrl.fieldValue = ctrl.fieldValueCopy;
        // };
        //
        ctrl.$onInit = function() {
        //     Make a copy of the initial value to be able to reset it later
        //     ctrl.fieldValueCopy = ctrl.fieldValue;

            // Set a default fieldType
            if (!ctrl.fieldType) {
                ctrl.fieldType = 'text';
            }

            if (!ctrl.placeholder) {
                ctrl.placeholder = ctrl.label;
            }
        };
    }

    angular.module('myApp').component('inputComponent', {
        templateUrl: 'angular/components/form_components/input_component.html',
        controller: inputComponentController,
        bindings: {
            label: "@",
            fieldType: "@",
            placeholder: "@"
        }
    });
})(window.angular);