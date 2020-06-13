import * as angular from "angular";
import * as  asyncLoader from "angular-async-loader"
import * as uiRouter from 'angular-ui-router'

var app = angular.module('app', [
    'ui.router'
]);
// app.config(['configureProvider', function(configureProvider: any) {
//     configureProvider.configure(commonConfig);
//     configureProvider.configure(config);    
// }]);
asyncLoader.configure(app);

console.log(uiRouter);

export { app };