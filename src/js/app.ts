//三大件引入（angular-ui-router在app-routes中依赖引入）
import * as angular from "angular";
import * as  asyncLoader from "angular-async-loader"

import 'angular-ui-router';
import 'angular-seagull2-common';
import 'angular-seagull2-oauth';
import 'angular-seagull2-workflow';
import 'seagull2-workflow-responsive';
import 'angular-seagull2-infrastructure';
import 'angular-seagull2-ueditor';

import 'text!common-config.json';
import 'text!config.json';

//使用../app和./app会导致分别调用到这里，这么写防止被覆盖, TODO想办法修正
let app: ng.IModule = window['_app'];
if (!app) {
    app = angular.module('app', [
        'ui.router',

        'angular-seagull2-common',
        'angular-seagull2-workflow-oauth', //这名字平台取错了, 需要修改
        'angular-seagull2-workflow',
        'seagull2-workflow-responsive',
        'angular-seagull2-infrastructure',
        'angular-seagull2-ueditor'
        //'angular-datepicker'
    ]);
    window['_app'] = app;

    //先只能用点奇技淫巧来引入配置文件
    const commonConfigJson = require('text!common-config.json');
    const configJson = require('text!config.json');

    app.config(['configureProvider', function (configureProvider: any) {
        configureProvider.configure(commonConfigJson);
        configureProvider.configure(configJson);
    }]);
    asyncLoader.configure(app);
}


export { app };