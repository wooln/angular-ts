import { angular } from '../../node_modules/angular/angular'
// import { asyncLoader } from '../../node_modules/angular-async-loader/angular-async-loader'
// import { uiRouter } from '../../node_modules/angular-ui-router/release/angular-ui-router'

var app = angular.module('app', [
    'ui.router'
]);
// asyncLoader.configure(app);

exports.app = app;
