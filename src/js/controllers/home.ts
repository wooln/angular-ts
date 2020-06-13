import { app } from '../app';
import * as ng from 'angular';

app.controller('home_controller', [
    '$scope',
    '$http',
    '$timeout',
    function (
        $scope: ng.IScope,
        $http: ng.IHttpService,
        $timeout: ng.ITimeoutService
    ) {
        $scope.title = 10;
        $scope.onClick = function () {
            $scope.title += 10;
        };

        let promise = $http.get('./home.html');
        promise.then(function (response) {
            window.alert(ng.toJson(response.data));
        });

        let myFun = function () {
            console.log('myFun');
        };

        $timeout(1000, false);
        $timeout(1000, true);
        $timeout(myFun, 1000, true);
    }]);

