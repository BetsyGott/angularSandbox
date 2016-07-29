(function(angular) {
    'use strict';
    function HeroListController($scope, $element, $attrs) {
        var HLC = this;

        HLC.list = [
            {
                name: 'Superman',
                location: ''
            },
            {
                name: 'Batman',
                location: 'Wayne Manor'
            },
            {
                name: 'Spiderman',
                location: 'NYC'
            }
        ];

        HLC.updateHero = function(hero, prop, value) {
            hero[prop] = value;
        };

        HLC.deleteHero = function(hero) {
            var idx = HLC.list.indexOf(hero);
            if (idx >= 0) {
                HLC.list.splice(idx, 1);
            }
        };
    }

    angular.module('heroApp').component('heroList', {
        templateUrl: 'html/heroList.html',
        controller: HeroListController
    });
})(window.angular);

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */