var _baseUrl = 'https://cdn.sinooceangroup.com/libs/';
require.config({
    waitSeconds: 0,
    map: {
        '*': {
            'ie8css': _baseUrl + 'requirecss-branch-seagull2/1.1.0/ie8css.js',
            'css': _baseUrl + 'requirecss-branch-seagull2/1.1.0/css.js'
        }
    },
    paths: {
        //三大件
        'angular': _baseUrl + 'angular/1.2.27/angular',
        'angular-ui-router': _baseUrl + 'angular-ui-router/0.2.18/release/angular-ui-router',
        'angular-async-loader': _baseUrl + 'angular-async-loader/1.3.2/angular-async-loader',

        //其他libs
        'angular-cookies': _baseUrl + 'angular/1.2.27/angular-cookies',
        'angular-ui-tree': _baseUrl + 'angular-ui-tree/2.15.0/dist/angular-ui-tree.min', //ie8对换行的注释有问题, 不能使用非min的
        'text': _baseUrl + 'text/2.0.15/text',
        'jquery': _baseUrl + 'jquery/1.12.3/dist/jquery',
        'webuploader': _baseUrl + 'webuploader/0.1.8/dist/webuploader',
        'linqjs': _baseUrl + 'linq/3.0.8/linq.min',

        //UE
        'angular-seagull2-ueditor': _baseUrl + 'angular-seagull2-ueditor/1.3.7/angular-seagull2-ueditor',
        'ueditor': _baseUrl + 'ueditor-branch-seagull2/1.0.3/ueditor.all',
        'zero-clipboard': _baseUrl + 'ueditor-branch-seagull2/1.0.3/third-party/zeroclipboard/ZeroClipboard',
        'default-ueditor-config': _baseUrl + 'ueditor-branch-seagull2/1.0.3/ueditor.config',

        //seagull2的
        'angular-seagull2-common': _baseUrl + 'angular-seagull2-common/1.11.0/angular-seagull2-common',
        'angular-seagull2-oauth': _baseUrl + 'angular-seagull2-oauth/1.8.0/angular-seagull2-oauth',
        'angular-seagull2-workflow': _baseUrl + 'angular-seagull2-workflow/1.20.3/angular-seagull2-workflow',
        'angular-seagull2-infrastructure': _baseUrl + 'angular-seagull2-infrastructure/0.1.7/angular-seagull2-infrastructure',
        'angular-datepicker': _baseUrl + 'datepicker-branch-seagull2/beta/datepicker-branch-seagull2',
        'seagull2-workflow-responsive': _baseUrl + 'seagull2-workflow-responsive/1.1.1/seagull2-workflow-responsive',

        //应用自身的公共
        'app': './js/app',
        'app-routes': './js/app-routes'
    },
    //这个配置是你在引入依赖的时候的包名
    shim: {
        'text': { exports: 'text' },
        'angular': { exports: 'angular' },
        'angular-cookies': { exports: 'angular-cookies', deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'angular-ui-tree': { deps: ['angular', 'css!' + _baseUrl + 'angular-ui-tree/2.15.0/dist/angular-ui-tree'] },
        'angular-datepicker': { deps: ['angular', 'css!' + _baseUrl + 'datepicker-branch-seagull2/beta/datepicker-branch-seagull2'] },

        'angular-seagull2-common': {
            deps: [
                'angular',
                'css!' + _baseUrl + 'angular-seagull2-common/1.11.0/angular-seagull2-common',
                'ie8css!' + _baseUrl + 'angular-seagull2-common/1.11.0/angular-seagull2-common.ie8'
            ]
        },
        'angular-seagull2-oauth': {
            deps: [
                'angular',
                'css!' + _baseUrl + 'angular-seagull2-oauth/1.8.0/angular-seagull2-oauth',
                'ie8css!' + _baseUrl + 'angular-seagull2-oauth/1.8.0/angular-seagull2-oauth.ie8'
            ]
        },
        'angular-seagull2-workflow': {
            deps: [
                'angular',
                'css!' + _baseUrl + 'angular-seagull2-workflow/1.20.3/angular-seagull2-workflow',
                'ie8css!' + _baseUrl + 'angular-seagull2-workflow/1.20.3/angular-seagull2-workflow.ie8'
            ]
        },
        'angular-seagull2-infrastructure': {
            deps: [
                'angular',
                'css!' + _baseUrl + 'angular-seagull2-infrastructure/0.1.7/angular-seagull2-infrastructure',
                'ie8css!' + _baseUrl + 'angular-seagull2-infrastructure/0.1.7/angular-seagull2-infrastructure.ie8'
            ]
        },

        //只有独立使用ueditor使用才需要这个垫片
        'ueditor': {
            deps: [
                'default-ueditor-config'
            ]
        },

        'zero-clipboard': {
            exports: 'ZeroClipboard'
        }
    }
});

require(['angular', 'app-routes'], function(angular) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});