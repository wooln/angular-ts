import { app } from './app'
import 'angular-ui-router'

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: any, $urlRouterProvider: any) {

    //默认跳转首页
    $urlRouterProvider.otherwise('/home');

    //流程跟踪
    $stateProvider.state('home', {
        url: '/home',
        controller: 'home_controller',
        controllerUrl: './js/controllers/home.js',
        templateUrl: './views/home.html',
        dependencies: []
    });
}]);

export { app }