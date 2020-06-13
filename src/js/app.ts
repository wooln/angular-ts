import * as angular from "angular";
import * as  asyncLoader from "angular-async-loader"
import * as uiRouter from 'angular-ui-router'

//使用../app和./app会导致分别调用到这里，这么写防止被覆盖
let app = window['_app'];
if (!app) {
    app = angular.module('app', [
        'ui.router'
    ]);
    window['_app'] = app;
}

// app.config(['configureProvider', function(configureProvider: any) {
//     configureProvider.configure(commonConfig);
//     configureProvider.configure(config);    
// }]);
asyncLoader.configure(app);

console.log(uiRouter);

export { app };