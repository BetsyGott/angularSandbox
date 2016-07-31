(function(angular) {
    'use strict';
    function buttonComponentController($scope, $element, $attrs) {
        var bcCtrl = this;
        bcCtrl.isFirstPage = true;
        bcCtrl.canCancel = false;

    }

    angular.module('myApp').component('buttonComponent', {
        templateUrl: 'angular/components/form_components/button_component.html',
        controller: buttonComponentController,
        bindings: {
            label: "@"
        }
    });
})(window.angular);