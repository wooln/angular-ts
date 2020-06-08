require.config({
    waitSeconds: 0,
    //配置angular的路径
    paths: {
        'angular': '../node_modules/angular/angular',
        // 'angular-ui-router': '../node_modules/angular-ui-router/release/angular-ui-router',
        // 'angular-async-loader': '../node_modules/angular-async-loader/angular-async-loader',
        ////应用自身的公共
        'sub': './libs/sub',
        // 'app': './js/app',
        // 'app-routes': './js/app-routes'
    },
    //这个配置是你在引入依赖的时候的包名
    shim: {
        'angular': { exports: 'angular' },
        // 'angular-ui-router': { deps: ['angular'] }
    }
});

require(["require", "./greet", 'angular', 'sub'], function(require, greet_1, angular, sub) {
    "use strict";
    console.log(greet_1.sayHello("TypeScript"));
    console.log(angular.version.full);
    console.log(sub);
});