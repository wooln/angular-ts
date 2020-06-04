define([
    'app'
], function(app) {
    'use strict';

    app.controller('home_controller', ['$scope', function($scope) {
        $scope.title = 10;
        $scope.onClick = function() {
            $scope.title += 10;
        };

    }]);
});