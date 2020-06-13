import { app } from '../app';
import * as angular from 'angular';
const ng = angular;

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
            myFun();
        };

        let myFun = function () {
            console.log('myFun');
            let promise = $http.get('./views/home.html');
            promise.then(function (response) {
                console.log(angular.toJson(response.data));
            });
        };
        $timeout(myFun, 1000, true);
    }]);