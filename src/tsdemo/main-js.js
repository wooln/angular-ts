require.config({
    waitSeconds: 0,   
    paths: {
        'angular': '../../node_modules/angular/angular',
        'sub': './libs/sub-js'
    },
    //这个配置是你在引入依赖的时候的包名
    shim: {
        'angular': { exports: 'angular' },
        // 'angular-ui-router': { deps: ['angular'] }
    }
});

require(["require", "./greet", 'angular', 'sub'], function(require, greet, angular, sub) {
    "use strict";
    console.log(greet.sayHello("TypeScript"));
    console.log(greet.treeEdge);
    console.log(angular.version.full);
    console.log(sub);
});