(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'app',

            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            '@ngrx': 'npm:@ngrx',
            '@ngrx/core': 'npm:@ngrx/core/bundles/core.umd.js',
            '@ngrx/core/compose': 'npm:@ngrx/core/compose.js',
            '@ngrx/core/operator/select': 'npm:@ngrx/core/operator/select.js',
            '@ngrx/store': 'npm:@ngrx/store/bundles/store.umd.js',
            '@ngrx/store-devtools': 'npm:@ngrx/store-devtools/bundles/store-devtools.umd.js',
            '@ngrx/store-log-monitor': 'npm:@ngrx/store-log-monitor/bundles/store-log-monitor.umd.js',

            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
