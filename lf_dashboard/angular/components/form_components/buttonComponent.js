(function(angular) {
    'use strict';
    function buttonComponentController($scope, $element, $attrs) {
        var bcCtrl = this;
        console.log("button Component Controller");


    }

    angular.module('myApp').component('buttonComponent', {
        templateUrl: 'angular/components/form_components/button_component.html',
        controller: buttonComponentController
    });
})(window.angular);